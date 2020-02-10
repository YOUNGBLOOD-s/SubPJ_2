import math
import pigpio  # need to execute "sudo pigpiod" in advance
import time
import Adafruit_DHT
import urllib
import binascii
import requests
import smbus
import threading


class sensor:

    def __init__(self, pi, gpio):

        self.pi = pi
        self.gpio = gpio

        self._start_tick = None
        self._last_tick = None
        self._low_ticks = 0
        self._high_ticks = 0
        self._last_level = 0

        self.wrong_level_count = 0
        self.total_interrupt_count = 0
        self.on_measure = False

        pi.set_mode(gpio, pigpio.INPUT)
        self._cb = pi.callback(gpio, pigpio.EITHER_EDGE, self._cbf)

    def measureStart(self):
        self.on_measure = True
        self._start_tick = self._last_tick = self.pi.get_current_tick()
        self._last_level = self.pi.read(self.gpio)

    def measureStop(self):
        self.on_measure = False

        # lastly check the level time and add
        level = self.pi.read(self.gpio)
        tick = self.pi.get_current_tick()
        ticks = pigpio.tickDiff(self._last_tick, tick)

        if level == 0:  # last level to timeout is low
            self._low_ticks += ticks
        elif level == 1:  # last level to timeout is high
            self._high_ticks += ticks
        else:  # timeout level, not used
            pass

    # Method for calculating Ratio and Concentration
    def read(self):

        interval = self._low_ticks + self._high_ticks

        if interval > 0:
            ratio = float(self._low_ticks) / float(interval) * 100.0
            concentration = 1.1 * pow(ratio, 3) - \
                3.8 * pow(ratio, 2) + 520 * ratio + 0.62
        else:
            ratio = 0
            concentration = 0.0

        tcnt = self.total_interrupt_count
        wcnt = self.wrong_level_count

        self.total_interrupt_count = 0
        self.wrong_level_count = 0

        self._start_tick = None
        self._last_tick = None
        self._low_ticks = 0
        self._high_ticks = 0
        self._last_level = 0

        return (self.gpio, interval, ratio, concentration, tcnt, wcnt)

    def _cbf(self, gpio, level, tick):

        if self.on_measure == False:
            return

        if self._start_tick is not None:

            ticks = pigpio.tickDiff(self._last_tick, tick)
            self._last_tick = tick
            self.total_interrupt_count += 1

            if self._last_level == level:
                self.wrong_level_count += 1
                return
            else:
                self._last_level = level

            if level == 0:  # Falling edge.
                self._high_ticks += ticks
            elif level == 1:  # Rising edge.
                self._low_ticks += ticks
            else:  # timeout level, not used
                pass

        else:
            self._start_tick = tick
            self._last_tick = tick
            self._last_level = level
            self.total_interrupt_count = 0
            self.wrong_level_count = 0


class roughness:
    I2C_CH = 1
    BH1750_DEV_ADDR = 0x23
    CONT_H_RES_MODE = 0x10
    CONT_H_RES_MODE2 = 0x11
    CONT_L_RES_MODE = 0x13
    ONETIME_H_RES_MODE = 0x20
    ONETIME_H_RES_MODE2 = 0x21
    ONETIME_L_RES_MODE = 0x23


'''
 조도값 읽는 함수
'''


def readIlluminance():
    i2c = smbus.SMBus(I2C_CH)
    luxBytes = i2c.read_i2c_block_data(BH1750_DEV_ADDR, CONT_H_RES_MODE, 2)
    lux = int.from_bytes(luxBytes, byteorder='big')
    i2c.close()
    return lux


'''
 1초에 한번씩 돌면서 조도값 출력
'''


def readIlluminanceThread():
    for i in range(1, 11):
        print('{0} lux'.format(readIlluminance()))
        time.sleep(1)


class temp_hum:
    def encoding(data):
        temp = binascii.hexlify(str.encode(str(data))).decode('utf-8')
        list = []
        for i in range(0, len(temp), 2):
            list.append(temp[i:i + 2])

        temp = '%' + '%'.join(list)
        return temp

    def dht11(self):
        sensor = Adafruit_DHT.DHT11
        pin = 17
        try:
            tmpT, tmpH = 0, 0
            cnt = 0

            while True:
                h, t = Adafruit_DHT.read_retry(sensor, pin)

                if h is not None and t is not None:
                    tmpT += t
                    tmpH += h
                    cnt += 1
                    print(f"{tmpT},{tmpH},{cnt}")
                    if cnt > 5:
                        break
                else:
                    print('Read error')
                time.sleep(1)

            resT = temp_hum.encoding(round(tmpT / 6, 2))
            resH = temp_hum.encoding(round(tmpH / 6, 2))

            print(resT, resH)
        except KeyboardInterrupt:
            print("Terminated by Keyboard")
        finally:
            print("End of Program")

        return resT, resH


if __name__ == "__main__":

    from datetime import datetime
    import total_sending  # import this script

    # store roughness data
    print('starting BH1750')
    print('Press Enter key to exit')
    # 쓰레드 생성
    thd = threading.Thread(target=readIlluminanceThread)
    # 쓰레드를 데몬으로 설정
    thd.daemon = True
    # 쓰레드 시작
    thd.start()
    # 키 입력 대기, 엔터 키가 입력이 되면 다음으로 넘어가서 'done'을 출력하고 프로그램 종료
    input()
    print('done')

    # store temperature and humid data
    print("tem_humid sensor")
    temHum = temp_hum()  # make class instance
    resT, resH = temHum.dht11()  # store temperature and humid data

    # store dust data
    pi = pigpio.pi('localhost')
    # GPIO 4 - Seosor Pin 4 (PM10)   we only use this pin
    s10 = total_sending.sensor(pi, 22)
    s25 = total_sending.sensor(pi, 27)  # GPIO 2 - Seosor Pin 2 (PM25)

    s10.measureStart()  # measure data
    time.sleep(60)  # wait(seconds) # collect data for 1minute
    s10.measureStop()

    timestamp = datetime.now()  # store now time
    g10, interval10, r10, PM10count, total_interrupt_count10, wrong_level_count10 = s10.read()

    if PM10count < 0 or PM10count == 1114000.62:
        PM10count = 0

    print("Measure in order --")
    print("PM1.0 time: {}, Interval: {}, Ratio: {:.3f}, Count: {}, Total Interrupt: {}, Wrong Interrupt: {}".
          format(timestamp, int(interval10), r10, int(PM10count), total_interrupt_count10, wrong_level_count10))

    resD = temp_hum.encoding(r10)

    # send data to backend
    urlStr = f"http://52.78.218.79:8877/api/sensor/{resT}/{resH}/{resD}/10"
    print(f"final result check {resT} {resH} {resD}")
    res = requests.get(urlStr)
    print("sending success")
    pi.stop()

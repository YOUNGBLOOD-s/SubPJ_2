import time
import Adafruit_DHT
import urllib
import binascii
import requests

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
            if cnt > 5: break
        else:
            print('Read error')
        time.sleep(1)

    round_tmpT = round(tmpT / 6, 2)
    round_tmpH = round(tmpH / 6, 2)
    tmpT = binascii.hexlify(str.encode(str(round_tmpT))).decode('utf-8')
    tmpH = binascii.hexlify(str.encode(str(round_tmpH))).decode('utf-8')
    list = []
    for i in range(0, len(tmpT), 2):
        list.append(tmpT[i:i+2])

    resT = '%' + '%'.join(list)

    list = []
    for i in range(0, len(tmpH), 2):
        list.append(tmpH[i:i+2])

    resH = '%' + '%'.join(list)

    print(resT, resH)
    urlStr=f"http://192.168.100.83:9090/api/sensor/{resT}/{resH}/10/10"
    res = requests.get(urlStr)

except KeyboardInterrupt:
    print("Terminated by Keyboard")

finally:
    print("End of Program")

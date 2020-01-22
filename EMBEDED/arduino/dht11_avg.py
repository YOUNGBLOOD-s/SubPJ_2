import time
import Adafruit_DHT

import requests

sensor = Adafruit_DHT.DHT11

pin = 4
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

    res = requests.get(f"http://192.168.100.83:9090/api/sensor/{tmpT / 5}/{tmpH / 5}")
except KeyboardInterrupt:
    print("Terminated by Keyboard")

finally:
    print("End of Program")

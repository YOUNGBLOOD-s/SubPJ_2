import time
import Adafruit_DHT

import json
import requests

sensor = Adafruit_DHT.DHT11

pin = 4
try:
    while True:
        h, t = Adafruit_DHT.read_retry(sensor, pin)
        if h is not None and t is not None:
            #first try: json
            #data={'Temperature':t,'Humidity':h}
            #data_json=json.dumps(data)
            #second try: request.post

            #final try: requet.get
            res = requests.get(f"http://192.168.100.66:9090/api/sensor/{t}/{h}")
        else:
            print('Read error')
        time.sleep(1)
except KeyboardInterrupt:
    print("Terminated by Keyboard")

finally:
    print("End of Program")
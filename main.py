import json
import requests
import io
import base64
from PIL import Image
import time

url = "http://127.0.0.1:7860"

payload = {
    "prompt": "<lora:Better Portrait Lighting:1>A black and white picture of a man with a smooth white background",
    "steps": 20
}

i=2

while True:
    response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
    r = response.json()
    print(r)
    image = Image.open(io.BytesIO(base64.b64decode(r['images'][0])))
    image.save('./images/output' + str(i) + '.png' )
    i = i + 1
    time.sleep(15)

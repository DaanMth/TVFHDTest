import json
import requests
import io
import base64
from PIL import Image
import time
import random
import logging
import os

url = "http://127.0.0.1:7860"

ethnicities = ["white", "African", "Asian", "Caucasian", "Hispanic", "Middle Eastern", "Pacific Islander"]

i=46
x=2

while True:
    payload = {
        "prompt": "<lora:Better Portrait Lighting:1>A black and white picture of a " + random.choice(ethnicities) +  " man with the age between " + str(random.randint(18, 80))+ "with different cultural backgrounds with a smooth white background, detailed eyes",
        "steps": 20
    }
    response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
    r = response.json()
    print(r)
    image = Image.open(io.BytesIO(base64.b64decode(r['images'][0])))
    image.save('./images/output' + str(i) + '.png' )
    i = i + 1


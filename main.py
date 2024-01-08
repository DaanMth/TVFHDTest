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

ethnicities = ["African", "Asian", "Caucasian", "Hispanic", "Native American", "Middle Eastern", "Pacific Islander"]
ages = [" 15-20", " 10-15", " 20-25"," 25-30", " 30-40", "40-50", "60-90"]

i=24
x=2

while True:
    payload = {
        "prompt": "<lora:Better Portrait Lighting:1>A black and white picture of a " + random.choice(ethnicities) +  " man with the age between " + random.choice(ages) + "with different cultural backgrounds with a smooth white background",
        "steps": 20
    }
    response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
    r = response.json()
    print(r)
    image = Image.open(io.BytesIO(base64.b64decode(r['images'][0])))
    image.save('./images/output' + str(i) + '.png' )
    i = i + 1


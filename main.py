import json
import requests
import io
import base64
from PIL import Image

url = "http://127.0.0.1:7860"

payload = {
    "prompt": "<lora:Better Portrait Lighting:1>A black and white picture of a man with a smooth white background",
    "steps": 20
}

response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)

r = response.json()

image = Image.open(io.BytesIO(base64.b64decode(r['images'][0])))
image.save('./images/output.png')
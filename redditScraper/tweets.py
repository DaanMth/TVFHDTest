import pandas as pd
import requests

twitter_data = []

payload = {
    'api_key':'d0532daea7079ab19a9f5dd3d7e95cdd',
    'query':'mental health personal story',
    'num':'1',
    'render':'true'
}
response = requests.get(
    'https://api.scraperapi.com/structured/twitter/search', params=payload
)
data = response.json()

print(data)
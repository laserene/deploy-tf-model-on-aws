+++
title = '4.3 Making Inference'
date = 2024-09-11T02:24:51+07:00
draft = false
+++

In this section, we will make inference using the model we have trained in the previous section. 
We will use the `requests` library in Python to make a POST request to the server.

### REST API
```python
import requests

# The API endpoint
url = "http://18.141.178.173:8501/v1/models/nmt:predict"

# Data to be sent
data = {
    "inputs": {
        "inputs": ["Hello, how are you?"],
        "maxlen": 30,
        "temperature": 0.9
    }
}

# A POST request to the API
response = requests.post(url, json=data)

# Print the response
print(response.json())  
```
in which `18.141.178.173` is the public IPv4 address of the EC2 instance.

Example response:
```
{
    'outputs': ['hallo , wie segeln losgehen ?']
}
```
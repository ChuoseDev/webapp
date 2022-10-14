### Data Preparation ###
import string
import re
import os
import logging
from pythainlp.util import normalize
from pythainlp import correct

emoji_pattern = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           "]+", flags=re.UNICODE)

def removePattern(inputText, pattern):
    r = re.findall(pattern, inputText)
    for i in r:
        inputText = re.sub(i, '', inputText)        
    return inputText

def remove_punct(text):
    text  = "".join([char for char in text if char not in string.punctuation])
    text = removePattern(text, 'https?://[A-Za-z0-9./]*')
    text = removePattern(text, '@[\w]*')
    text = re.sub('[^ก-๙]', '', text)
    text = text.replace('"',"")
    text = text.replace("!","")
    text = text.replace("​","")
    text = text.replace("-","")
    text = emoji_pattern.sub(r'', text)
    return text

def get_cleaned_text(text):
    text = remove_punct(text)
    text = normalize(text)
    text = correct(text)
    return text

### Model Prediction ###
#def setup_model():
    # model = sdksadlsaa
    # return model

# def get_prediction(input):
    # return model.predict(input)


### Dynamo DB ###
import requests
import datetime
import socket
from dotenv import load_dotenv
load_dotenv()

dynamo_db_endpoint = os.getenv('DYNAMO_DB_ENDPOINT')
dynamo_db_access_key = os.getenv('DYNAMO_DB_ACCESS_KEY')
dynamo_db_secret_key = os.getenv('DYNAMO_DB_SECRET_KEY')

if dynamo_db_endpoint is None or dynamo_db_access_key is None or dynamo_db_secret_key is None:
    logging.error('environment variable of dynamo db is not filled')
    exit()

def save_to_dynamo(age, gender, txt_input, lvl):
    timeStamp = str(datetime.datetime.now())[:16]
    apl_id = f'{socket.gethostbyname(socket.gethostname())}@{timeStamp}'
    try:
        json_body = {'apl_id':apl_id, 'age':age, 'gender':gender, 'txt_input':txt_input, 'lvl':lvl, 'timeStamp':timeStamp}
        logging.info('request post with body', json_body)
        requests.post(
            url=dynamo_db_endpoint,
            json=json_body,
            headers={'access_key':dynamo_db_access_key, 'secret_key':dynamo_db_secret_key}
        )
        logging.info(f'apl_id:f{apl_id} request is success')
    except requests.exceptions.RequestException as e:
        logging.error(f'apl_id:f{apl_id} request is error' + e)
    return

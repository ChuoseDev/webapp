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

### Model Prediction ###
import pandas as pd
import numpy as np
from pythainlp import word_tokenize
from pythainlp import word_vector
import tensorflow

model_lstm_path = os.getenv('MODEL_LSTM_PATH')
if model_lstm_path != None and os.path.exists(model_lstm_path):
    lstmModel = tensorflow.keras.models.load_model(model_lstm_path)
else:
    logging.exception(
        f'are not exist or there are no file corresponding to path: MODEL_LSTM_PATH={model_lstm_path} of environment variable')
    exit()

wModel = word_vector.core.get_model()
thai2dict = {}
for word in wModel.index_to_key:
    thai2dict[word] = wModel[word]
thai2vec = pd.DataFrame.from_dict(thai2dict, orient='index')
thVocab = thai2vec.index.to_list()


def findMaxArrayLen(vectorArray):
    maxlen = 0
    for index in range(len(vectorArray)):
        arrayLen = len(vectorArray[index])
        if arrayLen > maxlen:
            maxlen = arrayLen
    return maxlen


def fill0in(vectorArray):
    maxArrayLen = findMaxArrayLen(vectorArray)
    for index, arrayValue in enumerate(vectorArray):
        if len(arrayValue) < maxArrayLen:
            vectorArray[index] = np.hstack(
                (arrayValue, np.zeros(maxArrayLen-len(arrayValue))))
        vectorResult = np.array(vectorArray)
    return vectorResult


def convWord(cw):
    cWord = cw
    for ti in range(len(cWord)):
        if cWord[ti] == ' ':
            cWord[ti] = ''
        elif cWord[ti] not in thVocab:
            cWord[ti] = ''
    return cWord


def tokenizeWord(wordTarget):
    wordToken = word_tokenize(wordTarget, engine='attacut')
    return wordToken


def token2index(tokenVector):
    wordVector = []
    for wordIndex in range(len(tokenVector)):
        if tokenVector[wordIndex] in thVocab:
            wordVector.append(thVocab.index(tokenVector[wordIndex]))
    return np.array(wordVector)


def prepare2train(inputTextList):
    pretrainList = []
    for index in range(len(inputTextList)):
        text = inputTextList[index]
        pretrainList.append(token2index(convWord(tokenizeWord(text))))
    return pretrainList


def get_label(text_list):
    return str(np.argmax(lstmModel.predict(fill0in(prepare2train(text_list)))))

########## (END) THESE FUNCTIONS WERE USED IN LSTM MODEL (END) ##########

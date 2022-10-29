### Data Preparation ###
import string
import re
import os
import logging
from pythainlp.util import normalize
from pythainlp import correct

## Edit
def correct_text(text): 
    text = text.replace('กุ',"กู")
    text = text.replace("กรุ","กู")
    text = text.replace("ไอ่","ไอ")
    text = text.replace("ไอ","ไอ้")
    text = text.replace("อั้ย","ไอ้")
    text = text.replace("ทรมาณ","ทรมาณ") 
    text = text.replace("พุ่ง","พรุ่ง")
    text = text.replace("สัตว์","สัส")
    text = text.replace("สัด","สัส")
    text = text.replace("ชิบ","ฉิบ")
    text = text.replace("ซัก","สัก")
    text = text.replace("ชั่ย","ใช่")
    text = text.replace("มรึง","มึง")
    text = text.replace("อยุ่","อยู่")
    text = text.replace("รึ","หรือ")
    text = text.replace("ป่าว","เปล่า")
    text = text.replace("ไช่","ใช่")
    text = text.replace("เทอ","เธอ")
    text = text.replace("คะ","ค่ะ")
    text = text.replace("ค๊ะ","คะ")
    text = text.replace("นะค่ะ","นะคะ")
    text = text.replace("กรู","กู")
    text = text.replace("เส้า","เศร้า")
    text = text.replace("ส่ะ","ซะ")
    text = text.replace("สะ","ซะ")
    text = text.replace("น่ะ","นะ")
    text = text.replace("น้ะ","นะ")
    text = text.replace("หละ","ละ")
    text = text.replace("หล่ะ","ละ")
    text = text.replace("ว้ะ","วะ")
    text = text.replace("ว่ะ","วะ")
    text = text.replace("หวะ","วะ")
    text = text.replace("สัมพัน","สัมพันธ์")
    text = text.replace("พลาสเตอ","พลาสเตอร์")
    text = text.replace("คัตเตอ","คัตเตอร์")
    text = text.replace("โทด","โทษ")
    text = text.replace("โคด","โคตร")
    text = text.replace("โครต","โคตร")
    text = text.replace("โกด","โกรธ")
    text = text.replace("ชั้น","ฉัน")
    text = text.replace("ไบโพล่า","ไบโพลาร์")
    text = text.replace("อิ","อี")
    text = text.replace("แม้ง","แม่ง")
    text = text.replace("แมร่ง","แม่ง")
    text = text.replace("ไม่นู้","ไม่รู้")
    text = text.replace("เท่าไร","เท่าไหร่")
    text = text.replace("พยาม","พยายาม")
    text = text.replace("ปันหา","ปัญหา")
    text = text.replace("อ้ะ","อะ")
    text = text.replace("อ่ะ","อะ")
    text = text.replace("ชีวิจ","ชีวิต")
    text = text.replace("มั่ย","ไม่")
    text = text.replace("เคร้า","เศร้า")
    text = text.replace("ประสบการ","ประสบการณ์")
    text = text.replace("เวน","เวร")
    text = text.replace("บริเวน","บริเวณ")
    text = text.replace("เคียด","เครียด")
    text = text.replace("กรี้ด","กรี๊ด")
    text = text.replace("กรี้ส","กรี๊ด")
    text = text.replace("เกียด","เกลียด")
    text = text.replace("เดะ","เดี๋ยว")
    text = text.replace("เด่ะ","เดี๋ยว")
    text = text.replace("เนี้ย","เนี่ย")
    text = text.replace("อารม","อารมณ์")
    text = text.replace("ดิ้ง","ดิ่ง")
    text = text.replace("สำหนับ","สำหรับ")
    text = text.replace("ร้องให้","ร้องไห้")
    text = text.replace("ซ้ะ","ซะ")
    text = text.replace("หนุ","หนู")
    text = text.replace("มุ้ย","ไหม")
    return text

def remove_emoji(text):
    emoji_pattern = re.compile("["
                               u"\U0001F600-\U0001F64F"  # emoticons
                               u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                               u"\U0001F680-\U0001F6FF"  # transport & map symbols
                               u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                               u"\U00002500-\U00002BEF"
                               u"\U00002702-\U000027B0"
                               u"\U000024C2-\U0001F251"
                               u"\U0001f926-\U0001f937"
                               u"\U00010000-\U0010ffff"
                               u"\u2640-\u2642"
                               u"\u2600-\u2B55"
                               u"\u200d"
                               u"\u23cf"
                               u"\u23e9"
                               u"\u231a"
                               u"\ufe0f"
                               u"\u3030"
                               "]+", flags=re.UNICODE)
    return emoji_pattern.sub(r'',text)

# Remove Punctuation
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
    text = text.replace(";)","")
    text = text.replace(":)","")
    text = text.replace(":))","")
    text = text.replace("?","")
    text = text.replace(".","")
    text = text.replace(",","")
    text = text.replace("/","")
    text = text.replace("$","")
    text = text.replace("฿","")
    text = remove_emoji(text)
    text = correct_text(text)
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

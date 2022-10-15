from crypt import methods
import flask
import pymysql
from datetime import date
from dotenv import load_dotenv
import os
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from attacut import tokenize
from joblib import load
import logging
import numpy as np
from pythainlp import word_tokenize
from pythainlp import word_vector
from gensim.models import KeyedVectors
import tensorflow


load_dotenv()

app = flask.Flask(__name__)

dynamo_db_host = os.getenv('DYNAMO_DB_HOST')
dynamo_db_port = os.getenv('DYNAMO_DB_PORT')
dynamo_db_user = os.getenv('DYNAMO_DB_USER')
dynamo_db_password = os.getenv('DYNAMO_DB_PASSWORD')
dynamo_db_database_name = os.getenv('DYNAMO_DB_DATABASE_NAME')

if dynamo_db_host is None or dynamo_db_port is None or dynamo_db_user is None or dynamo_db_password is None or dynamo_db_database_name is None:
    logging.error('environment variable of dynamo db is not filled')
    exit()

con = pymysql.connect(host=dynamo_db_host,
                      port=int(dynamo_db_port),
                      user=dynamo_db_user,
                      password=dynamo_db_password,
                      db=dynamo_db_database_name
                      )


def insert_data(usr_nm, age, gender, text1, text2):
    today = date.today()
    today.strftime('%Y-%m-%d')
    cur = con.cursor()
    cur.execute('INSERT INTO USER_INFO (AS_AT_DT, CUST_USR_NM, CUST_AGE, CUST_GENDER, TEXT_Q1, TEXT_Q2) VALUES (%s,%s,%s,%s,%s,%s)',
                (today, usr_nm, age, gender, text1, text2))
    con.commit()
    return


vectorCount = CountVectorizer(tokenizer=tokenize)
tf_transformer = TfidfTransformer(use_idf=False)

model_weight_path = os.getenv('MODEL_WEIGHT_PATH')
if model_weight_path != None and os.path.exists(model_weight_path):
    clf = load(model_weight_path)
else:
    logging.exception(
        f'are not exist or there are no file corresponding to path: MODEL_WEIGHT_PATH={model_weight_path} of environment variable')
    exit()

model_lstm_path = os.getenv('MODEL_LSTM_PATH')
if model_lstm_path != None and os.path.exists(model_lstm_path):
    print(model_lstm_path)
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


def prepare_transformer(vectorCount, tf_transformer):
    model_train_data_path = os.getenv('MODEL_TRAIN_DATA_PATH')
    if model_train_data_path != None and os.path.exists(model_train_data_path):
        X_train = pd.read_csv(model_train_data_path).drop(
            columns='Unnamed: 0')['Tweet']
        logging.info('X_train loaded with shape:', X_train.shape)
        X_trainCount = vectorCount.fit_transform(X_train)
        tf_transformer.fit(X_trainCount)
        logging.info(
            'count vector from train data is fitted with shape:', X_trainCount.shape)
    else:
        logging.error(
            f'are not exist or there are no file corresponding to path: MODEL_TRAIN_DATA_PATH={model_train_data_path} of environment variable')
        exit()
    return vectorCount, tf_transformer


def get_label(tweet):
    input = pd.Series([tweet])
    testVecCount = vectorCount.transform(input)
    testTF = tf_transformer.transform(testVecCount)
    testPredict = clf.predict(testTF)
    if len(testPredict) > 0:
        return testPredict[0]
    logging.error(
        'There are something wrong with classifier, could not get prediction')
    return ''


def contain_fields(js):
    field_names = ['CUST_USR_NM', 'CUST_AGE',
                   'CUST_GENDER', 'TEXT_Q1', 'TEXT_Q2']
    for field in field_names:
        if field not in js:
            return False
    return True


########## (BEGIN) THESE FUNCTIONS WERE USED IN LSTM MODEL (BEGIN) ##########

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


def getLabelLSTM(text_list):
    return str(np.argmax(lstmModel.predict(fill0in(prepare2train(text_list)))))

########## (END) THESE FUNCTIONS WERE USED IN LSTM MODEL (END) ##########


@app.route('/')
def home():
    return 'Hello my first Flask'


@app.route('/', methods=['post'])
def insert():
    request = flask.request
    if request.method == 'POST' and request.content_type == 'application/json' and contain_fields(request.json):
        js = request.json
        usr_nm = js['CUST_USR_NM']
        age = js['CUST_AGE']
        gender = js['CUST_GENDER']
        text1 = js['TEXT_Q1']
        text2 = js['TEXT_Q2']
        insert_data(usr_nm, age, gender, text1, text2)
        label = get_label(text1)
        return flask.jsonify({'message': 'successful', 'label': label})
    return flask.jsonify({'message': 'grae mai mee sit'}), 400


@app.route('/lstm', methods=['post'])
def lstm():
    request = flask.request
    js = request.json
    text = js['TEXT']
    label = getLabelLSTM([text])
    return flask.jsonify({'message': 'successful', 'label': label})


if __name__ == '__main__':
    vectorCount, tf_transformer = prepare_transformer(
        vectorCount=vectorCount, tf_transformer=tf_transformer)
    app.run(debug=True)

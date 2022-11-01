import logging
logging.basicConfig(filename='./log.txt', level='INFO')
from logics import get_cleaned_text, save_to_dynamo, get_label
import flask
from dotenv import load_dotenv
from flask_cors import CORS
from waitress import serve
import time

load_dotenv()

app = flask.Flask(__name__)
CORS(app)

first_field_names = [
"CUST_USR_NM",
"CUST_AGE",
"CUST_GENDER",
"TEXT_Q1",
"TEXT_Q2",
]

second_field_names = [
"LABEL",
"APL_ID",
"TEXT_09_10",
"TEXT_09_12",
"TEXT_09_13",
"SELECTED_CARDS",
"TEXT_13_11",
"TEXT_14_07",
"TEXT_15_06",
]

def contain_fields(js, field_names):
    for field in field_names:
        if field not in js:
            return False
    return True


@app.route('/')
def home():
    return 'Hello my first Flask'


@app.route('/', methods=['post'])
def insert():
    request = flask.request
    js = request.json
    if request.method == 'POST' and request.content_type == 'application/json' and contain_fields(js, first_field_names) and not contain_fields(js, ['APL_ID']):
        text2 = js['TEXT_Q2']
        cleaned_text = get_cleaned_text(text2)
        if cleaned_text == '':
            return flask.jsonify({'message': 'cleaned text is empty string', 'label': 5})
        current_time = time.time()
        logging.info('clean' + str(current_time))
        label = get_label([cleaned_text])
        current_time = time.time()
        logging.info('label' + str(current_time))
        logging.info('label is' + label)
        apl_id = save_to_dynamo(js, True, label)
        return flask.jsonify({'message': 'successful', 'label': label, 'apl_id':apl_id})
    if request.method == 'POST' and request.content_type == 'application/json' and contain_fields(js, first_field_names) and contain_fields(js, second_field_names):
        save_to_dynamo(js, False)
        return flask.jsonify({'message': 'successful'})
    return flask.jsonify({'message': 'grae mai mee sit'}), 400


if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=5000)

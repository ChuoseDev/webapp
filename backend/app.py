from logics import get_cleaned_text, save_to_dynamo, get_label
import flask
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = flask.Flask(__name__)
CORS(app)

def contain_fields(js):
    field_names = [
        # 'CUST_USR_NM', 
    'CUST_AGE', 'CUST_GENDER', 'TEXT_Q1', 'TEXT_Q2'
    ]
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
    if request.method == 'POST' and request.content_type == 'application/json' and contain_fields(request.json):
        js = request.json
        # usr_nm = js['CUST_USR_NM']
        age = js['CUST_AGE']
        gender = js['CUST_GENDER']
        # text1 = js['TEXT_Q1']
        text2 = js['TEXT_Q2']
        cleaned_text = get_cleaned_text(text2)
        label = get_label(cleaned_text)
        label = 1
        save_to_dynamo(age, gender, text2, label)
        return flask.jsonify({'message':'successful', 'label':cleaned_text})
    return flask.jsonify({'message': 'grae mai mee sit'}), 400

if __name__ == '__main__':
    # vectorCount, tf_transformer = prepare_transformer(vectorCount=vectorCount, tf_transformer=tf_transformer)
    app.run(debug=True, port=4000)

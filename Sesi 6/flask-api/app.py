from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

# endpoint
@app.route('/hello') 
# function say_hello_world
def say_hello_world():
    # return datanya
    return {'result': "Halo FSD 2 OCBC Batch 3!"}
    # return "Halo FSD 2 OCBC Batch 3!"
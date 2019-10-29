""" 

API Interface for our Angular Site

@author: Rehmat Karim 

"""

import flask
from flask import request, jsonify
# import requests
import json

app = flask.Flask(__name__)
app.config["Debug"] = True

@app.route('/',methods=["GET"])
def home():
    return """ <h1> Welcome to Mubeen's Weather API </h1>
    <p> You are currently at home </p> """



@app.route('/api/validateUser', methods=["GET"])
def validateUser():
	
	print("GET /api/validateUser")

	if 'email' not in request.args:
		return "No Args Supplied"

	print("Extracting args")
	print(request.args)
	print(request.args['email'])
	email    = request.args['email']
	password = request.args['password']

	print(email)
	print(password)

	return "[NOTE] Args supplied email = "+email+" pass = "+password

	#return "yay"

@app.route('/signUp', methods=['GET', 'POST'])
def signUp():
	## /signup?name=Ali&email=rehmat@rkb.com&password=fast123

	"""
	{
		'name': 'Ali',
		
	}
	"""





if __name__ == '__main__':
        import os  
        port = int(os.environ.get('PORT', 33507)) 
        #app.run(host='0.0.0.0', port=port)    # Uncoment when pushing to heroku
        app.run()          

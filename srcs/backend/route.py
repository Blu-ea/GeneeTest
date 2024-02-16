from __main__ import app
from flask import request, Response
import db.connector

@app.route('/commune', methods=['GET'])
def commune():
	return 'it works!'

@app.route('/departement', methods=['GET'])
def departement():
	return 'it works!'

@app.route('/affaire', methods=['GET'])
def gAffaire():
	return 'it works!'


# #################################
# #################################
# #################################


@app.route('/affaire', methods=['POST'])
def pAffaire():
	# return (request.json)
	input = request.json
	try:
		in_data = db.connector.Affaire_db(**input)
		print (in_data)
	except Exception as e :
		print (f"EXCEPTIOION IS  --- {e}")
		return ("NOPE")
	return " DONE "

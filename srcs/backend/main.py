from flask import Flask
# from backend.db.connector import init_db
# from db import connector
import db.connector
import csv_reader

app = Flask(__name__)
import route


@app.route('/')
def hello():
	data = csv_reader.data("fr-esr-referentiel-geographique.csv")
	return "Hello world!"



if __name__ == '__main__':
	database = db.connector.init_db()
	app.run(host='0.0.0.0', port=8000, debug= True)




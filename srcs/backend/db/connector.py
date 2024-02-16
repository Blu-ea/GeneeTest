import mysql.connector
import csv_reader

class Affaire:
	_name: str
	_precision: str

class Lieux:
	departement: str
	commune: str


class Affaire_dto(Affaire):
	def __init__(self, name, lieux: str, precision):
		_precision = precision
		_name = name
		_lieux = csv_reader.get_data(lieux)
	_lieux: list[Lieux]

class Affaire_db(Affaire):
	def __init__(self, name:str , lieux: list[Lieux], precision:str):
		_precision = precision
		_name = name
		_lieux = csv_reader.get_raw(lieux)
	_lieux: str



class DBManager:
	def __init__(self, database='GeneeTest', host="db", user="root", password_file=None):
		with open(password_file, 'r') as pf:
			self.connection = mysql.connector.connect(
				user=user, 
				password=pf.read(),
				host=host, # name of the mysql service as set in the docker compose file
				database=database,
				auth_plugin='mysql_native_password'
			)
		if self.connection.is_connected():
			print ("Database connected")
		else:
			print ("Database DID NOT connect")
	
	def build_up(self):
		c = self.connection.cursor()
		# with self.connection.cursor() as c:
		query = '''
			CREATE TABLE IF NOT EXISTS Affaire (
				`name` VARCHAR(100) PRIMARY KEY,
				`commune` VARCHAR(100) NOT NULL,
				`precision` VARCHAR(100)
			)'''
		c.execute(query)
		self.connection.commit()
		c.close()

	def add_raw(self, data: dict):
		pass


	# def query_titles(self):
		# self.cursor.execute('SELECT title FROM blog')
		# rec = []
		# for c in self.cursor:
		# 	rec.append(c[0])
		# return rec


	def get_data(self, name: str) -> Affaire_db| None:
		query = '''
			SELECT * FROM Affaire
			WHERE name %s
			'''
		try:
			with self.connection.cursor() as c:
				c.execute(query, name)
				c.commit()
				return Affaire_dto(c.name, c.commune, c.precision)
		except:
			c.rollback()
			return None
		


def init_db() -> DBManager:
	database = None
	database = DBManager(password_file="/run/secrets/db-password")
	database.build_up()
	return database
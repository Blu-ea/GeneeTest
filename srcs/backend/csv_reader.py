import db.connector
import csv

class data:

	_data: list[dict[str:str]] = [dict()]
	reader: csv.reader

	def __init__(self, infile: str):
		with open(infile, mode='r', encoding='utf-8-sig') as f:
			reader = csv.reader(f, delimiter=";")
			header = next(reader)
			my_dict = dict()
			value = next(reader)
			while value:
				for j in range(len(header)):
					my_dict[header[j]] = value[j]
				self._data.append(my_dict)
				try: 
					value = next(reader)
				except: 
					break
			for i in range(len(header)):
				print (self._data[i])
		# print(self._data)

_d = data("fr-esr-referentiel-geographique.csv")
# _d = data("mini.csv")

def get_raw(lieux: list[dict]) -> str:
	ret = ""
	for d in lieux:
		for departement, commune in d.items():
			for i in range(len(_d._data)):
				# print(f"{_d._data[i].get('COM_NOM')}")
				if (_d._data[i].get("COM_NOM") == commune):
					ret += ";"+ _d._data[i].get("COM_NOM")
					break
	print(f"RET IS ---- {ret}")
	return ret

def get_data(lieux: str) -> list[dict]:
	# self._data[]
	pass
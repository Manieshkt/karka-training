import json
import pandas as pd
from sqlalchemy import create_engine
import mysql.connector;

# data={}
with open('data.json') as f:
    data=json.load(f)
print(data)
print(type(data))

# for i in data:
#     print(i) 

# newData={ 
#     "id":8,
#     "name":"john K",
#     "place":"City G",
#     "course":"IT"
# }
# data.setdefault('content', []).append(newData)
# print(data)

df = pd.DataFrame(data.get('content', []))

username = 'root'
password = ''
host = '127.0.0.1'
port = '3306'
database = 'karka'

mysql_url = f'mysql+mysqlconnector://{username}:{password}@{host}:{port}/{database}'
engine = create_engine(mysql_url, echo=True)
df.to_sql('my_table', con=engine, index=False, if_exists='replace')

engine.dispose()

# with open ('data.json','w') as new:
#     json.dump(data,new,indent=4)
# print('succesfully appended')

# for datas in data["content"]:
#     print(datas)

conn=mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='',
    database='karka',
    autocommit=True
    )
cursor=conn.cursor(dictionary=True)

newQuery="insert into my_table(id ,name,place,course) values (12,'wqqe','city K','Tech')"
cursor.execute(newQuery)
newResults=cursor.fetchall()
print(newResults)

query='select * from my_table'
cursor.execute(query)
results=cursor.fetchall()
print(results)
print(type(results))

data['content']=results

with open('data.json','w') as G:
    json.dump(data,G,indent=4)

cursor.close()
conn.close()
# f.close()
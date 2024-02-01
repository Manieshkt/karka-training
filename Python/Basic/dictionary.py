import mysql.connector;
import json

conn=mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='',
    database='karka'
)
cursor=conn.cursor(dictionary=True)
query='select name,place from students limit 5'
cursor.execute(query)
results=cursor.fetchall()
print(results)
print(type(results))

this=[{
    'name':x['name'],
    'place':x['place']
}
for x in results]

for x in this:
 x['placeb']='hi'
 x['city']='chennai'
 x.pop('city')
# key=this.keys()
# print(key)

print(this)
print(type(this))
new=json.dumps(this,indent=4)
print(new)
# for x in this:
#  print(this[x])
cursor.close()
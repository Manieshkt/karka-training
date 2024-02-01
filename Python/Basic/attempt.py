import mysql.connector

conn=mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='',
    database=''
)
cursor=conn.cursor()
query='show databases'
cursor.execute(query)
results=cursor.fetchall()
print(results)

choose=input('select a database : ')
if (choose,) in results :
    one=conn.cursor()
    use='use {}'.format(choose)
    one.execute(use)
    show='show tables from {}'.format(choose)
    one.execute(show)
    result_one=one.fetchall()
    print(result_one)
else:
    print('select correctly')

tables=input('select a table : ')
Table=conn.cursor()
select='select * from {}'.format(tables)
Table.execute(select)
Result=Table.fetchall()
print(Result)


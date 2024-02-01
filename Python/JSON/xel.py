import pandas as pd
import json

data=pd.read_excel('/home/perfect/Downloads/Sheet.xlsx')
print (data)

new= data.to_json(orient='records',indent=4)
print(new)
print(type(new))

with open('/home/perfect/karka-training/Python/JSON/Xeldata.json','w') as f:
    f.write(new)
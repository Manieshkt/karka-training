# num1=(input('enter num1:'))
# num2=(input('enter num2:'))
# sum =int(num1)+int(num2)
# print(sum)

# def myfun(num1,num2):
#     print(num1+num2)
# myfun(32323,52365)

# add=0
# for x in range(10):
#     if x%2==0:
#      add+=x
# print(add)    

# one=int(input("enter a num : "))
# if one>18:
#     print ('ok')
# else:
#     print('no')

arr = [1, 0, 2, 3, 0, 4, 5, 0]
newarr = []
for i in arr:
    newarr.append(i)
    if i == 0:
        newarr.append(0)
newarr = newarr[:len(arr)]
print(newarr)


num=[0,1,0,3,1,2]
newNum=[]
ex=[]
for i in num:
  if i!=0:
    newNum.append(i)
  else:
    ex.append(0)
newNum.extend(ex)
print(newNum)


input_A=[5,10,20,2,0,33,100,90]
newinput=[]
for i in range(0, len(input_A), 2):
  newinput.append(input_A[i])
  newinput.append(input_A[i+1])
  newinput.append(input_A[i]+input_A[i+1])
print(newinput)

num= int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")

for i in range(0,20,2):
  print(i)

Totalsum=0
for i in range(1,100):
  Totalsum+=i
print(Totalsum)

for i in range (1,6):
  print('*'*i)

replace=[12,32,5,43,56,5,43,5,4,45,5]
replaced=[]
for numbers in replace:
  if numbers==5:
    replaced.append('*')
  else:
    replaced.append(numbers)
print(replaced)


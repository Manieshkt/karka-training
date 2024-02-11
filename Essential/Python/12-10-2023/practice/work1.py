# a=[3,2,2,3,5,10,11,5]
# b=a.remove(5)
# c=a.remove(5)
# a.append("*")
# a.insert(8,"*")
# print(a)

# a=[3,2,2,3,5,10,11,5]
# b=a.remove(5)
# c=a.remove(5)
# d=("*","*")
# a.extend(d)
# print(a) 

# a=[3,2,2,3,5,10,11,5]
# b=a.remove(5)
# c=a.remove(5)
# d=(5,5)
# a.extend(d)
# a=["*" if values==5 else values for values in a]
# print(a)

# a=[3,2,2,3,5,10,11,5] 
# count=0
# for values in a: 
#     if values==5:
#        count+=1
#        a.remove(values)
# for x in range(count):
#     a.append("*")
#     print(a)

a=[3,2,2,3,5,10,11,5]
for values in a:
    if values==5:
        a.remove(values)
        a.append("*")
print("output",a)

# a=[5,0,10,0,15,0,20,0,30]
# b=[]
# for values in a:
#     b.append(values)
#     if values==0:
#         b.append(0)
# print(b)
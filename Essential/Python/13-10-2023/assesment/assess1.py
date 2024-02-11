a=[3,2,15,4,10,15]
b=[]
for i in range(len(a)):
    if (i%2==0):
        b.append(a[i])
        b.append(a[i+1])
        b.append(a[i]+a[i+1])
print(b)



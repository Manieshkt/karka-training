age=int(input("how old are you,specifically?"))
if age<16:
    print("you cant drive")
elif age==16 or age==17:
    print("you can drive but not vote")
elif age==18 or age<25:
    print("you can vote but not rent a car")
else:
    print("you can pretty much do anything")
for i in iter(int, 1) :
    number = int(input("enter number: "))
    if number > 100 :
        print("correct")
        break
    else:
        print("the number must be greater than 100. Please enter again")

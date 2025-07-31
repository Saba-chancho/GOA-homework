Correct_password = "python123"
password = ""

while password != Correct_password:
    password = input("please enter password: ")
    if password != Correct_password:
        print("try again")

print("password is correct")

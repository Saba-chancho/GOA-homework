num1 = int(input("შეიყვანე პირველი რიცხვი: "))
num2 = int(input("შეიყვანე მეორე რიცხვი: "))
op = input("შეიყვანე მოქმედება (+, -, *, /): ")


if op == "+":
    print("შედეგი:", num1 + num2)
if op == "-":
    print("შედეგი:", num1 - num2)
if op == "*":
    print("შედეგი:", num1 * num2)
if op == "/":
    if num2 == 0:
        print("არასწორი ოპერაცია!")
    if num2 != 0:
        print("შედეგი:", num1 / num2)
if op != "+" and op != "-" and op != "*" and op != "/":
    print("არასწორი ოპერაცია!")

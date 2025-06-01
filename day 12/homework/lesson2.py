num1 = int(input("შეიყვანე პირველი რიცხვი:"))
num2 = int(input("შეიყვანე მეორე რიცხვი: "))
if num1 > 0 and num2 > 0 :
    print("ორივე დადებითია")
if num1 > 0 and num2 < 0 :
    print("მხოლოდ ერთი დადებითი რიცხვია")
if num1 < 0 and num2 > 0 :
    print("მხოლოდ ერთი დადებითი რიცხვია")
if num1 < 0 and num2 < 0 :
    print("არცერთი არ არის დადებითი")
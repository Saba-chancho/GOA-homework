age = int(input("შეიყვანეთ თქვენი ასაკი: "))
pulse = int(input("შეიყვანეთ გულისცემა: "))

if age < 30 and pulse < 140:
    print("შეგიძლიათ მეტი ივარჯიშოთ")
elif age >= 30 and pulse > 170:
    print("დასვენება გჭირდებათ")
else:
    print("აქტივობის დონე ნორმალურია")

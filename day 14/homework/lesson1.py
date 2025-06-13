age = int(input("შეიყვანეთ თქვენი ასაკი: "))
weight = int(input("შეიყვანეთ თქვენი წონა: "))

if age < 10:
    if weight < 20:
        print("წონა დაბალია")
    elif weight <= 40:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")

elif 10 <= age <= 17:
    if weight < 40:
        print("წონა დაბალია")
    elif weight <= 65:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")

elif age >= 18:
    if weight < 50:
        print("წონა დაბალია")
    elif weight <= 90:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")

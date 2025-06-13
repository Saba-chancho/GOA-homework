sis = int(input("შეიყვანეთ პირველი მაჩვენებელი: "))
dias = int(input("შეიყვანეთ მეორე მაჩვენებელი: "))
if sis > 140 and dias  > 90 :
    print("მაღალი წნევა")
elif sis < 90 or dias < 60 :
    print("დაბალი წნევა")
else :
    print("წნევა ნორმალურია")
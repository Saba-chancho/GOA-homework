
age = int(input("შეიყვანეთ თქვენი ასაკი: "))
hour = int(input("შეიყვანეთ საათი (0-23): "))

while hour < 0 or hour > 23:
    print("გთხოვთ შეიყვანოთ სწორი დრო (0-დან 23-მდე)")
    hour = int(input("შეიყვანეთ საათი (0-23): "))
if age < 18 and hour >= 22 :
    print("დროა დაძინების")
elif age >= 60 and hour >= 21 :
    print("დასვენება რეკომენდებულია")
else:
    print("შეგიძლიათ გააგრძელოთ აქტივობა")



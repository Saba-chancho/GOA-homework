age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if 0 <= age <= 12:
    print("ბევრი ვიტამინიანი საკვები")
elif 13 <= age <= 25:
    print("ენერგიის მომცემი საკვები")
elif 26 <= age <= 59:
    print("ბალანსირებული რაციონი")
elif age >= 60:
    print("დაბალკალორიული და მსუბუქი საკვები")
else:
    print("არასწორი ასაკი")
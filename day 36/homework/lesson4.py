products = {
    "apple": 3,
    "banana": 2,
    "milk": 5
}

for i in products:
    print(i)

a = input("მიუთითე პროდუქტი: ")

if a in products:
    print("ფასი:" , products[a] ,"ლარი")
else:
    print("პროდუქტი არ არსებობს")

products.update({
    "cola" : 4
})

products.clear()
print('დაბეჭდვა დასუფთავების შემდეგ: ', products)
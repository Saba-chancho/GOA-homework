fruit1 = {"apple", "banana", "cherry", "mango"}
fruit2 = {"banana", "orange", "kiwi", "apple"}
# აერთიანებს ყველა ხილს ორივე სეტიდან
print(fruit1.union(fruit2))
print(fruit1 | fruit2)
# გამოიტანს მხოლოდ იმ ხილებს, რომლებიც ორივე სეტშია
print(fruit1.intersection(fruit2))
print(fruit1 & fruit2) 
# fruit1-ში რაც არის, მაგრამ fruit2-ში არა
print(fruit1.difference(fruit2))
print(fruit1 - fruit2)  
# fruit2-ში რაც არის, მაგრამ fruit1-ში არა
print(fruit2.difference(fruit1)) 
print(fruit2 - fruit1)   
# ხილი, რომელიც ან fruit1-შია ან fruit2-ში, მაგრამ ორივეში ერთად არა
print(fruit1.symmetric_difference(fruit2))
print(fruit1 ^ fruit2)   
# ახალი ხილის დამატება
fruit1.add("pineapple")  
print(fruit1)
# კონკრეტული ხილის წაშლა
fruit1.remove("banana")
print(fruit1)

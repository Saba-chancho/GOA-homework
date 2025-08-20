A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
# ყველა ელემენტი ორივე სეტიდან
print(A.union(B)) 
print(A | B)   
# მხოლოდ ის ელემენტები, რომლებიც ორივე სეტშია
print(A.intersection(B))
print(A & B)            
# ის ელემენტები, რომლებიც მხოლოდ A-შია და B-ში არა
print(A.difference(B))
print(A - B)   
# სეტის დაცარიელება
C = {10, 20, 30}
C.clear()
print(C)
# ელემენტის დამატება
D = {1, 2}
D.add(3)
print(D)
#ელემენტის წაშლა
D.remove(2)  
print(D)
# ის ელემენტები, რომლებიც ან A-შია ან B-ში, მაგრამ ორივეში ერთად არა
print(A.symmetric_difference(B))  
print(A ^ B)  
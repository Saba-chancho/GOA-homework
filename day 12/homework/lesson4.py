
a = 1
b = 0
c = 0

# ა) (A && !B) || (B && !A)
result_0 = (a and not b) or (b and not a)

# ბ) (B && C) && (A || B)
result_1 = (b and c) and (a or b)

# გ) (A && !C) || (B && !A) || (B && !C)
result_2 = (a and not c) or (b and not a) or (b and not c)

# შედეგების დაბეჭდვა
print("ა) result_0 =", result_0)
print("ბ) result_1 =", result_1)
print("გ) result_2 =", result_2)

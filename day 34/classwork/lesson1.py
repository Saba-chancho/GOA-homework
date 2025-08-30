numbers = (10, 20, 30, 40, 50)
listi = list(numbers)
listi[2] = 99
numbers = tuple(listi)
print(numbers)
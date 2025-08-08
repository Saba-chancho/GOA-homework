def multiply(list1, list2):
    sum1 = 0
    for num in list1:
        sum1 += num

    sum2 = 0
    for num in list2:
        sum2 += num

    return sum1 * sum2

a = [1, 2, 3]
b = [4, 5]

result = multiply(a, b)
print(result)
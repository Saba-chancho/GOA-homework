def numbers(numbers):
    evens = []

    for num in numbers:
        if num % 2 == 0:
            evens.append(num)

    return evens

nums = [1, 2, 3, 4, 5, 6]
result = numbers(nums)
print(result)
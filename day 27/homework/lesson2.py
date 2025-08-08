def numbes(numbers):
    i = 0
    doubled = []

    while i < len(numbers):
        doubled.append(numbers[i] * 2)
        i += 1

    return doubled

nums = [1, 3, 5]
result = numbes(nums)
print(result)

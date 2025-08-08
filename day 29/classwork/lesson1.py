def Hnum(numbers):
    max_num = numbers[0] 
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

print(Hnum([10,20,13,34,65,23]))    
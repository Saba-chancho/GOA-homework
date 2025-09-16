# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.
def litres(time):
    liters = int(time) // 2
    
    return liters
# Write a program that finds the summation of every number from 1 to num (both inclusive).
# The number will always be a positive integer greater than 0. Your function only needs to return the result,
# what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
def summation(num):
    total = 0
    add = 1
    while add <= num:
        total += add
        add += 1
    return total
# Given an array of integers your solution should find the smallest integer.
def find_smallest_int(arr):
    smallest = arr[0]
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest    
# Define a method named countCharOccurrences or count_char_occurrences that accepts a string and
# a char as inputs and returns the number of times the char occurs in the string as an int.
def count_char_occurrences(strng, char):
    count = 0
    for c in strng:
        if c == char:
            count += 1
    return count
# You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

# Your function will accept three arguments:
# The first and second argument should be numbers.
# The third argument should represent a sign indicating the operation to perform on these two numbers.

# You should return the result of applying the given operation to these numbers.

# Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

# If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

# return a value:
# "unknown value" (JS, PHP, Python)
# throw an exception:
# std::invalid_argument (C++)
# ArgumentException (C#)
# IllegalArgumentException (Java)
def calculator(x, y, op):
    if (type(x) != int and type(x) != float) or (type(y) != int and type(y) != float):
        return"unknown value" 

    if op == "+":
        return  x + y
    elif op == "-" :
        return x-y
    elif op == "*" :
        return x*y
    elif op == "/" :
        return x/y
    else:
        return "unknown value"
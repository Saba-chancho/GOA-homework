# Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).
# Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.
# Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]
def interest(p, r, n):
    p = int(p)
    total = p + (p * r * n)
    total1 = p * (1 + r) ** n 
    li = [round(total), round(total1)]
    return  li
# Write a function that takes an integer in input and outputs a string with currency format.
# Integer in currency format is expressed by a string of number where every three characters are separated by comma.
def to_currency(price):
    return f"{price:,}"
# Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, 
# the second value of the second array, the third value of the third array, and so on...
def diagonal_sum(array):
    total = 0
    for i in range(len(array)):
        total += array[i][i]
    return total
# Write a program that finds the summation of every number from 1 to num (both inclusive). 
# The number will always be a positive integer greater than 0.
# Your function only needs to return the result,
# what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
def summation(num):
    count = 0
    for i in range(num) :
        count += i 
        
    return count + num
# Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

# If a word starts with a number or special character, skip the word and leave it out of the result.

# Input String will not be empty.

# For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
def capitals_first(text):
    lower = []
    upper = []
    
    for i in text.split():
        if i[0].isupper():
            upper.append(i)
        elif i[0].islower():
            lower.append(i)
    
    return ' '.join(upper + lower)

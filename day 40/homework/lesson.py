# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?
def number_to_string(num):
    return str(num)
# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
def paperwork(n, m):
    if n<0 or m<0 :
        return 0
    else:
        return n*m
# Implement a function which convert the given boolean value into its string representation.

# Note: Only valid inputs will be given.   
def boolean_to_string(b):
    return str(b)
# This kata is about multiplying a given number by eight if 
# it is an even number and by nine otherwise.
def simple_multiplication(number) :
    if number % 2  == 0 :
        return number*8 
    else:
        return number*9
# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.
def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for v in sentence:
        if v in vowels :
            count += 1
    return count
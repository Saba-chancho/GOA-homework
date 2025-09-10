# Implement a function which convert the given boolean value into its string representation.
def boolean_to_string(b):
    return str(b)
# Consider an array/list of sheep where some sheep may be missing from their place. 
# We need a function that counts the number of sheep present in the array (true means present).
def count_sheeps(sheep):
    count = 0 
    for i in sheep: 
        if i == True: 
            count += 1 
    return count
# You get an array of numbers, return the sum of all of the positives ones.
def positive_sum(arr):
    count = 0
    for i in arr :
        if i > 0 :
            count += i
    return count

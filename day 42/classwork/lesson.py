# Take an array and remove every second element from the array. 
# Always keep the first element and start removing with the next element.
def remove_every_other(my_list):
    return  my_list[::2]
# Write a function that removes the spaces from the string, then return the resultant string.
def no_space(x):
    space = ""
    for i in x :
        if i != " ":
            space += i
    return space
# Your code will show Full name of the neighbor and the truncated version of the name as an array.
# If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
def who_is_paying(name):
    if len(name) <= 2:
        return [name]
    else:
        return [name, name[:2]]
# You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". 
# The function should take four arguments:
def guess_blue(blue_start, red_start, blue_pulled, red_pulled):
    remaining_blue = blue_start - blue_pulled
    remaining_red = red_start - red_pulled
    return remaining_blue / (remaining_blue + remaining_red)
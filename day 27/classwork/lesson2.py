def greet(name):
    print("გამარჯობა,", name)

greet("საბა")

def greet1(name):
    return "გამარჯობა, " + name

message = greet1("საბა")
print(message)
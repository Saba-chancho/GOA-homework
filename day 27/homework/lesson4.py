def names(names):
    result = []
    for name in names:
        if name.lower().find("n") == 0:
            result.append(name)
    return result

names_list = ["nino", "natia", "giorgi", "nika", "ana"]
NS = names(names_list)
print(NS)
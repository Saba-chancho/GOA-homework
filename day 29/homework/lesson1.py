def WordLengths(sentence):
    words = []
    word = ""

    for letter in sentence:
        if letter != " ":
            word += letter
        else:
            words.append(word)
            word = ""
    words.append(word)
    for letter in words:
        print(letter, len(letter), "ასო")


WordLengths("მე მიყვარს პროგრამირება და GOA")
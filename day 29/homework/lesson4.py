def Reverse(sentence):
    words = []
    word = ""

    for letter in sentence:
        if letter != " ":
            word += letter
        else:
            if word != "":
                words.append(word)
                word = ""
    if word != "":
        words.append(word)
    reversed_sentence = ""
    for i in range(len(words)-1, -1, -1):
        reversed_sentence += words[i]
        if i != 0:
            reversed_sentence += " "

    return reversed_sentence

print(Reverse("მე მიყვარს პროგრამირება და GOA"))
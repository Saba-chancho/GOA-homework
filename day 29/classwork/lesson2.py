def Sentence(sentence):   
    words1 = []
    words = ""
    
    for letters in sentence:
        if letters != " ":
            words += letters
        else:
            words1.append(words)
            words = ""
    words1.append(words)  
    sentence1 = ""
    for i in range(len(words1)):
        sentence1 += words1[i]
        if i != len(words1) - 1:
            sentence1 += ", "
    
    return sentence1

print(Sentence("ჩემი სახელია საბა ჭანჭალეიშვილი"))

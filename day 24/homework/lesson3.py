vowels = "აეიოუ"
correct_words = []

for i in range(10):
    word = input("შეიყვანე სიტყვა: ")

    Fletter = word[0]
    Lletter = word[-1]

    first_vowel = False
    for i in vowels:
        if Fletter == i:
            first_vowel = True
            break

    last_vowel = False
    for i in vowels:
        if Lletter == i:
            last_vowel = True
            break

    if first_vowel == False and last_vowel == False:
        correct_words.append(word)

for word in correct_words:
    print(word)

vowels = "აეიოუ"

while True:
    word = input("შეიყვანე სიტყვა: ")

    vowel_count = 0
    consonant_count = 0

    for letter in word:
        is_vowel = False
        for i in vowels:
            if letter == i:
                is_vowel = True
        if is_vowel == True:
            vowel_count = vowel_count + 1
        if is_vowel == False:
            consonant_count = consonant_count + 1

    print("ამ სიტყვაში არის", vowel_count, "ხმოვანი და", consonant_count, "თანხმოვანი")

    i = 0
    for a in word:
        i = i + 1

    first = word[0]
    last = word[i - 1]

    first_vowel = False
    last_vowel = False

    for i in vowels:
        if first == i:
            first_vowel = True
        if last == i:
            last_vowel = True

    if first_vowel == False:
        if last_vowel == False:
            print("სწორია")
            break

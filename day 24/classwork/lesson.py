vowels = "აეიოუ"

while True:
    word = input("შეიყვანე სიტყვა: ")

    i = 0
    for letter in word:
        i = i + 1

    first = word[0]
    last = word[i - 1]

    first_is_vowel = False
    last_is_vowel = False

    for v in vowels:
        if first == v:
            first_is_vowel = True
        if last == v:
            last_is_vowel = True

    if first_is_vowel == False:
        if last_is_vowel == False:
            print("სწორია ")
            break
    print("თავიდან სცადე: ")

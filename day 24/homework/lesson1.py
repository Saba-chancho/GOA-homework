vowels = "აეიოუ"
correct_words = []

for i in range(5):
    word = input("შეიყვანე სიტყვა: ")

    first_letter = word[0]
    last_letter = word[-1]

    first_is_vowel = False
    last_is_vowel = False

    for i in vowels:
        if first_letter == i:
            first_is_vowel = True
        if last_letter == i:
            last_is_vowel = True

    if not first_is_vowel and not last_is_vowel:
        correct_words.append(word)

print("სწორი სიტყვები იყო:")
for i in correct_words:
    print(i)

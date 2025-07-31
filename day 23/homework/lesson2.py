vowels = "აეიოუ"
correct_count = 0

for i in range(5):
    word = input("შეიყვანე სიტყვა: ")

    first_letter = word[0]
    last_letter = word[-1]

    first_is_vowel = first_letter in vowels
    last_is_vowel = last_letter in vowels

    if not first_is_vowel and not last_is_vowel:
        correct_count += 1

print("შენ შეიყვანე სწორი სიტყვა:", correct_count)
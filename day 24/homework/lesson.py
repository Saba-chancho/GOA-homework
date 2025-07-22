vowels = "აეიოუ"

while True:
    word = input("შეიყვანე სიტყვა: ")
    first_letter = word[0]
    last_letter = word[-1]
    
    first_vowel = False
    for i in vowels :
        if first_letter == i:
            first_vowel = True
            break
            

    last_vowel = False
    for i in vowels :       
        if last_letter == i:
            last_vowel = True
            break

    if first_vowel == False and last_vowel == False :
        print("correct")
    else:
        print("თავიდან სცადე")
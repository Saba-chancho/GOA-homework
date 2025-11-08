// 1) switch იგივე როგორც if ფუნქცია მაგრამ ის განსხვავდება სინტაქსით და დამატებითი ფუნქციებით როგორიცაა break და default

let age = 19

switch(true){
    case (age >= 18):
        console.log("შენ ხარ სრულწლოვანი")
        break
    case (age < 18) :
        console.log("შენ არ ხარ სრულწლოვანი")
        break
    default:
        console.log("შეცდომაა")
}


let a = 6
let b = 5

switch(true){
    case (a === b):
        console.log("კვადრატი")
        break
    case ( a > b || a < b):
        console.log("მართკუთხედი")
        break
    default:
        console.log("შეცდომაა")
}

// 4) case გამოიყენება სხვადასხვა ვარიანტისდასაწერად ანუ განიხილავს სხვადასხვა ვარიანტს Switch-შო.
// 5) brake როცა case სრულდება გამოყობს ის ერთმანეთისგან და კოდს აჩერებს.
// 6) default არის იგივე როგორც else ფუნქცია if-ში, როცა არცერთი ვარიანტი არარის სწორი default ეშვება.

let num = Number(prompt("შემოიტანეთ რიცხვი"))

switch(true){
    case (num >= 0):
        console.log("რიცხვი არის დადებითი")
        break
    default:
        console.log("რიცხვი არის უარყოფითი")
}


let num1 = Number(prompt("შემოიტანეთ რიცხვი"))

switch(num1){
    case 1:
        console.log("ორშაბათი")
        break
    case 2 :
        console.log("საბშაბათ")
        break
    case 3 :
        console.log("ოთხშაბათი")
        break
    case 4 :
        console.log("ხუტშაბათი")
        break
    case 5 :
        console.log("პარასკევი")
        break
    case 6 :
        console.log("შაბათი")
        break
    case 7 :
        console.log("კვირა")
        break
    default:
        console.log("არასწორი რიცხვი")


}


// 9) for loop გამოიყენება კოდის რამოდენიმეჯერ გამოყენებისთვის და გვეხმარება ნაკლები კოდის წერაში.

for (let i = 1; i < 20; i++ ){
    console.log(i)
}


for (let i = 1; i <= 10 ; i++ ){
    console.log(i)
}


let number = 20

for (let i = 1; i <= number; i++){
    console.log(i)
}


// 13) while გამოიყენება იმიშემთხვევაში როცა არ ვიცით სანამდე დაგვჭირდება მისი გამეორება.

let num2 = 0

while(num2 <= 5){
    console.log(num2)
    num2++
}

let num3 = 0

while(num3 <= 20){
    if(num3 % 2 == 0)
        console.log(num3)
    num3++
}

// 16) Do while არის იგივე while loop მაგრამ ჯერ უშვებს და მერე ამოწმებს (თუმდაც შედეგი false იყოს ერთხელ მაინც გაუშვებს შედეგს)
// 17) while loopდააბრუნებს ციკლს მხოლოდ მაშინ, როცა პირობა მართალია.
// do while loop ჯერ ასრულებს მოქმედებას და შემდეგ ამოწმებს.

let question 

do {
    question = prompt("do you like javascript?")
    
} while (question !== "yes")
console.log("good")
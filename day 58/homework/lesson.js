// 1)
const num = 100

if(num >= 100){
    console.log("რიცხვი მეტია 100-ზე")
}else{
    console.log("რიცხვი ნაკლებია 100-ზე")
}

// 2)
const name = "kocho"

if(name === "kocho"){
    console.log("welcome back")
}else{
    console.log("hello")
}

// 3)
const age = 13;

if (age < 13) {
    console.log("child")
} else if (age >= 13 && age < 17) {
    console.log("teen")
} else {
    console.log("adult")
}

// 4)
const num1 = 0;

if (num1 === 0) {
    console.log("ნულია")
} else {
    console.log("ნულია არაა")
}

// 5)
const password = "myPassword123"

if (password.length > 8) {
    console.log("strong")
} else {
    console.log("weak")
}

// 6)
console.log(12 % 5)

// 7)
const a = 10;
const b = 20;

console.log(a !== b)

// 8)
console.log(15 * 4 / 2)

// 9)
const isLoggedIn = true
const isAdmin = false

console.log(isLoggedIn && isAdmin)

// 10)
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// 11)
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// 12)
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// 13)
const arr = [3, 6, 9, 12]
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum)

// 14)
const langs = ["js", "html", "css"]

for (let i = 0; i < langs.length; i++) {
    console.log(i + langs[i])
}

// 15)
const weather = "sunny"

switch (weather) {
    case "sunny":
        console.log("The weather is sunny")
        break;
    case "rainy":
        console.log("It's raining")
        break;
    case "cloudy":
        console.log("The sky is cloudy")
        break;
    default:
        console.log("Unknown weather")
}

// 16)
const num2 = 2

switch (num2) {
    case 1:
        console.log("spring")
        break
    case 2:
        console.log("summer")
        break
    case 3:
        console.log("autumn")
        break
    case 4:
        console.log("winter")
        break
    default:
        console.log("unknown season")
}

// 17)
const transport = "car"

switch (transport) {
    case "car":
        console.log("You are driving a car")
        break;
    case "bus":
        console.log("You are taking a bus")
        break;
    case "bike":
        console.log("You are riding a bike")
        break
    default:
        console.log("Unknown transport")
}

// 18)
const month = 7

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("spring")
        break
    case 6:
    case 7:
    case 8:
        console.log("summer")
        break;
    case 9:
    case 10:
    case 11:
        console.log("autumn")
        break
    default:
        console.log("invalid month")
}

// 19)
const score = "B"

switch (score) {
    case "A":
        console.log("Excellent")
        break
    case "B":
        console.log("Good")
        break
    case "C":
        console.log("Average")
        break
    case "D":
        console.log("Poor")
        break
    case "F":
        console.log("Fail")
        break
    default:
        console.log("Invalid grade")
}
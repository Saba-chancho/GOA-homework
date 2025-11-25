//1)

let num = 12

if (num > 0){
    console.log(num , "მეტია 0 ზე")
} else{
    console.log(num, "ნაკლებია 0 ზე")
}

//2)

let num1 = 20
if (num1 % 2 === 0) {
    console.log('კენტია')
} else{
    console.log("ლუწია")
}

//3)
let a = 10;
let b = 25;
let c = 60;

let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

console.log("ყველაზე დიდი რიცხვი:", max);

//4) 
console.log(5 + 7);
console.log(10 - 4);
console.log(3 * 3);
console.log(20 / 2); 

//5)

let a1 = 10;
let b2 = 20;

console.log(a1 > b2); 
console.log(a1 < b2);
console.log(a1 === b2);
console.log(a1 !== b2);

// 6)

let num2 = 0;

for (let i = 0; i < 3; i++) {
    num2++;
}

console.log(num2);

//7)
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//8)
let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log(sum)

//9)
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//10)
let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter++;
}

//11)
let sum1 = 0;
let i1 = 1;

while (i1 <= 20) {
    sum1 += i1;
    i1++;
}

//8)
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) { 
        console.log(i);
    }
}
//13)
let item = "apple";
let category;

switch (item) {
    case "apple":
        category = "fruit";
        break;
    case "carrot":
        category = "vegetable";
        break;
    default:
        category = "unknown";
}

console.log(category)
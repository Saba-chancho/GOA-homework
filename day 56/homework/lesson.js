// level 56:


// 7) შექმენი  arrow function სახელად , რომელსაც გადაეცემა სტრინგი და დააბრუნებს რამდენი ასოა სტრიქონში.

// 1) ფუნქციებს ვიყენებთ მაშინ როდესაც სურვილისაბმერ გვინდა კოდის გამოძახება, ფუნქციის სინტაქსი:
// function "ფუნქციის სახელი" (პარამეტრი)
// 2) ისინი განსხვავდებიან სინტაქსით.

// 3)
function greet(name){
    console.log('გამარჯობა ' + name)
}

greet("საბა")
greet("ვატო")

// 4)
function math(num1,num2,num3,num4){
    return num1 + num2 + num3 + num4
}

console.log(math(4,65,78,32))
console.log(math(20,39,53,8))
console.log(math(76,53,28,20))

// 5) მათ შორის განსხვავება არის მათი სინტაქსი, arrow ფუნქცია უფრო ახალი არის და if else უფრო მოკლედ და ადვილად შეგვიძლია ჩავწეროთ.

// 6)
let isEvens = (nums) => {
    return nums % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvens(10))

// 7)

let countLetters = (nums) =>{console.log(nums.length)}

countLetters("hello world")
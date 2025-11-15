function sayHello(word){
    console.log(word)
}
sayHello("hello world")

function greet(Name){
    console.log("გამარჯობა" + Name)
}
greet("საბა")


function add(a,b){
    return a+b
}

console.log(add(13,25))

function isAdult(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log(isAdult(19))

const isEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(4))
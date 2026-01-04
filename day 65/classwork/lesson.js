// 1)
let fruits = ["apple","banana"]
fruits.push("kiwi")
console.log(fruits)

// 2) 
let numbers = [1,2,3,4,5]
console.log(numbers.length)
numbers.push(1,2)
console.log(numbers.length)

// 3)
let numbers1 = [10, 20, 30, 40, 50]
let removed = numbers1.pop()
console.log("წაიშალა:", removed)
console.log("მასივი ბოლოს:", numbers1)

// 4)
let messages = []
let inputText = "Hello, saba"
messages.push(inputText)
console.log("მასივის ელემენტების რაოდენობა:", messages.length)

// 5)
let counter = {
  count: 0,
  increment: function() {
    this.count += 1
  }
}

for (let i = 0; i < 50; i++) {
  counter.increment()
}

console.log(counter.count)

// 6)
let sum = {
  total: 0,
  sumTo20: function() {
    for (let i = 1; i <= 20; i++) {
      this.total += i
    }
  }
}

sum.sumTo20()
console.log(sum.total)
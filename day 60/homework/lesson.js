// 1)ობიექტი არის ცვლადი რომელიც შეიცავს რამოდენიმე მნიშვნელობას.

// 2)
// const person = {
//     key:value,
//     key:value...
// }

// 3)
const person = {
    name: "saba",
    lastName: "chanchaleishvili",
    age: 15,
    FavColor: "white",
    FavCar: "mercedes"
}

// 4)
const favCar = {
    brand: "mercedes",
    model: "AMG C63",
    year: "1200BC"
}
// 5)
const user= {
    name: "vato",
    age: 16,
    hobby: "programming",
    favColor: "chorni"
}
// 6)
console.log(user.name)

// 7)
console.log(user)

// 8)
// console.log(user.name)
// console.log(user["name"])

// 9) ობიექტის ფუნქცია.

// 10)
const messi = {
    country: "argentina",
    teamNow: "miami",
    teamOld: "barcelona",
    shouldPlay() {
       return "კი"
    }
}

console.log(messi)
console.log(messi.shouldPlay())

// 11)
const calculator = {
  add(a, b) {
    return a + b
  },
  subtract(a, b) {
    return a - b
  },
  multiply(a, b) {
    return a * b
  },
  divide(a, b) {
    return a / b
  },
  compare(a, b) {
    return a > b
  },
  divide1(a, b){
    return a % b
  }
}




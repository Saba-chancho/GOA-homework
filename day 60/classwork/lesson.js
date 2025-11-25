const person = {
  name: "saba",
  age: 15,
  city: "Tbilisi"
}

console.log(person.name)
console.log(person.age)
console.log(person.city)
console.log(person["name"])
console.log(person["age"])
console.log(person["city"])

const car = {
  brand: "BMW",
  model: "M5",
  year: 2020
};

console.log(car.brand)
console.log(car.year)


console.log(car["brand"])
console.log(car["year"])


const user = {
  name: "saba",
  sayHello() {
    console.log(this.name + " Hello")
  }
}

user.sayHello()


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
  }
}

console.log(calculator.add(5, 3))
console.log(calculator.subtract(10, 4))
console.log(calculator.multiply(6, 7))
console.log(calculator.divide(20, 5))


const person1 = {
  name: "საბა",
  age: 15,
  introduce() {
    console.log(`ჩემი სახელია ${this.name} და ვარ ${this.age}`)
  }
}

person1.introduce()
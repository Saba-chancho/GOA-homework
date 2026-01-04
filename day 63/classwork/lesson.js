// 1) 
const user = {
    name: "saba",
    age: 15,
    isAdult: function (){
        if (this.age >=18){
            console.log("u are an adult")
        } else{
            console.log("u arent adult")
        }
    }
}

user.isAdult()

// 2)
const car = {
    brand: "mercedes",
    speed: 110,
    checkSpeed: function(){
        if (this.speed > 120){
            console.log("too fast")
        } else {
            console.log("speed is okay")
        }
    }
    
}

car.checkSpeed()


// 3)
const student = {
    name: "gio",
    score: 60,
    passOrFail: function(){
        if (this.score >= 50){
            console.log("passed")
        } else{
            console.log("failed")
        }
    }
}

student.passOrFail()


// 4)
const calculator = {
    n: 10,
    sumToN: function () {
        let sum = 0
        let i = 1
        while (i <= this.n) {
            sum += i
            i++
        }
        return sum;
    }
}
console.log(calculator.sumToN())

// 5)

const multiplier = {
    number: 20,
    times: 3,
    multiply: function(){
        let result = 1
        let i = 1

        while (i <= this.times) {
            result *= this.number
            i++
        }

        return result
    }
}

console.log(multiplier.multiply())

// 6)
const calculator1 = {
    n: 10,

    sumToN: function () {
        let sum = 0

        for (let i = 1; i <= this.n; i++) {
        sum += i
        }

        return sum
    }
}

console.log(calculator1.sumToN())
// 1) 
const user = {
    age: 15,
    isAdult: function (){
        if (this.age >=18){
            console.log("u are an adult")
        } else{
            console.log("u are minor")
        }
    }
}

// 2)
const car = {
    speed: 120,
    tooFast: function(){
        if (this.speed > 120){
            console.log("too fast")
        } else{
            console.log("good speed")
        }
    }
}


// 3) 
const student = {
    score: 60,
    passed: function(){
        if(scor >= 50){
            console.log("passed")
        } else{
            console.log("failed")
        }
    }
}

// 4)
const numbers = {
    arr: [-5, 10, 0, -3, 8, 15, -1, 7],
    getPositive: function() {
        let positives = []

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > 0) {
                positives.push(this.arr[i])
            }
        }

        console.log(positives)
    }
}

// 5)
const repeater = {
  text: "Hello World!",
  count: 5,

  repeatText: function() {
    let i = 0

    while (i < this.count) {
      console.log(this.text)
      i++
    }
  }
}


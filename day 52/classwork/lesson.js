let Name = prompt("შეიყვანე შენი სახელი:");
if (Name === "გიორგი") {
  console.log("ნაცნობია");
} else {
  console.log("არ ვიცნობ ამ პიროვნებას");
}


let num1 = Number(prompt("შეიყვანე პირველი რიცხვი"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი"));
if (num1> 0)(
    alert("დადებით")
) 
else  (
    alert("უარყოფითია")
)
if (num2> 0)(
    alert("დადებით")
) 
else  (
    alert("უარყოფითია")
)


let num3 = Number(prompt("შეიყვანე პირველი რიცხვი"));
let num4 = Number(prompt("შეიყვანე მეორე რიცხვი"));
if (num3 === num4) {
  console.log("რიცხვები ტოლია");
}
else if (num3 > num4) {
  console.log("პირველი რიცხვი მეტია მეორეზე");
}
else {
  console.log("მეორე რიცხვი მეტია პირველზე");
}


let symbol = prompt("შეიყვანე მათემატიკური სიმბოლო (+, -, *, /, %)");
let num5 = Number(prompt("შეიყვანე პირველი რიცხვი"));
let num6 = Number(prompt("შეიყვანე მეორე რიცხვი"));
if (symbol === "+") {
  console.log("შედეგი:", num5 + num6);
} else if (symbol === "-") {
  console.log("შედეგი:", num5 - num6);
} else if (symbol === "*") {
  console.log("შედეგი:", num5 * num6);
} else if (symbol === "/") {
  console.log("შედეგი:", num5 / num6);
} else if (symbol === "%") {
  console.log("შედეგი:", num5 % num6);
} else {
  console.log("შეყვანილი სიმბოლო არასწორია!");
}


// == -> ამოწმებს მხოლოდ მნიშვნელობას, მაგრამ ტიპს არ ამოწმებს.
// === -> ამოწმებს მნიშვნელობასაც და ტიპსაც.
let Number1 = Number(prompt("შეიყვანე რიცხვი 1-დან 12-მდე:"));

switch (Number1) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
     case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

let grade = prompt("შეიყვანე ასო ქულა (A, B, C, D, F):");

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
     case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// while loopდააბრუნებს ციკლს მხოლოდ მაშინ, როცა პირობა მართალია.
// do while loop ჯერ ასრულებს მოქმედებას და შემდეგ ამოწმებს.

let i1 = 1;

do {
    console.log(i1);
    i1++;
} while (i <= 10);
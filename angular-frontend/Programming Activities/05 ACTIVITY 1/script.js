
function checkAge() {
    let age = prompt("Enter your age:");
 
    if (age >= 25) {
        alert("User is 25 years old and above.");
    } else {
        alert("User is below 25 years old.");
    }
}
 

function checkNumber() {
    let num = prompt("Enter a number:");
 
    if (num < 100) {
        alert("The number is less than 100.");
    } else {
        alert("The number is 100 or greater.");
    }
}
 
function printNumbers() {
    let result = "";
 
    for (let i = 0; i <= 30; i++) {
        result += i + "<br>";
    }
 
    document.getElementById("output").innerHTML = result;
}
 

function printEven() {
    let result = "";
 
    for (let i = 0; i <= 40; i++) {
        if (i % 2 === 0) {
            result += i + "<br>";
        }
    }
 
    document.getElementById("output").innerHTML = result;
}
 

function printMultiples() {
    let result = "";
 
    for (let i = 40; i >= 10; i--) {
        if (i % 3 === 0) {
            result += i + "<br>";
        }
    }
 
    document.getElementById("output").innerHTML = result;
}
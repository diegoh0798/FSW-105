// JavaScript Calculator 
var readLineSync = require('readline-sync');
var firstNum = readLineSync.questionInt("please enter your first number: ");
var secondNum = readLineSync.questionInt("please enter your second number: ");
var enteredOperation = readLineSync.question("please enter the operation to perform: add, sub, mul, div ");

//Addition Function
function addition(num1, num2) {
    return (num1 + num2);
}
//  Subtraction Function
function subtraction(num1, num2) {
    return (num1 - num2);
}
//  Multiplication function
function multiplication(num1, num2) {
    return (num1 * num2);
}
//  Division function
function division(num1, num2) {
    return (num1 / num2);
}

function calculator(number1, number2, operation) {
    if (operation == "add") {
        console.log("Addition of two numbers: " + addition(number1, number2));
    } else if (operation == "sub") {
        console.log("Subtraction of two numbers:" + subtraction(number1, number2));
    } else if (operation == "mul") {
        console.log("Multiplication of two numbers: " + multiplication(number1, number2));
    } else if (operation == "div") {
        console.log("Division of two numbers: " + division(number1, number2));
    } else {
        console.log("cannot identify the entered operation. please try again.")
    }
}

calculator(firstNum, secondNum, enteredOperation);
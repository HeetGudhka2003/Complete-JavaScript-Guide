console.clear();

// Functions in JavaScript

// Functions are reusable blocks of code that perform a specific task or set of tasks.

// Functions are defined using the function keyword.

// Functions are called using the function name followed by parenthesis.

// Parameters are data that are passed into a function when it is declared.

// Arguments are data that are passed into a function when it is called.

// Return statements are used to return data from a function.

// Example of a function:

function addTwoNumbers(num1, num2) {

    // Here num1 and num2 are parameters

    return num1 + num2;
}

console.log(addTwoNumbers(10, 20)); // 30 - Here 10 and 20 are arguments

console.log(addTwoNumbers(100, 200)); // 300 - Here 100 and 200 are arguments

// Function Expression

// A function expression is a function that is assigned to a variable.

// Example of a function expression:

const multiplyTwoNumbers = function (num1, num2) {

    return num1 * num2;
}

console.log(multiplyTwoNumbers(40, 20)); // 200 - Here 40 and 20 are arguments

console.log(multiplyTwoNumbers(100, 200)); // 2000 - Here 100 and 200 are arguments

// Anonymous Function

// An anonymous function is a function that is without a name.

// Example of an anonymous function:

const subtractTwoNumbers = function (num1, num2) {

    return num1 - num2;
}

console.log(subtractTwoNumbers(100, 20)); // 80 - Here 100 and 20 are arguments

console.log(subtractTwoNumbers(100, 200)); // -100 - Here 100 and 200 are arguments

// Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that is called immediately after it is defined.

// Example of an IIFE:

(function (num1, num2) {

    console.log(num1 + num2);

})(5, 10);
console.clear();

/* 
=====================================================================

    💻 JavaScript Interview Questions: Conditional Statements 🔥

=====================================================================

*/

// 1️⃣ Voting Eligibility Checker

let userAge = 22;

let isCitizen = true;

let isRegistered = true;

// If userAge is greater than or equal to 18 and he/she is a citizen and registered, then he/she is eligible to vote.

if (userAge >= 18 && isCitizen && isRegistered) {

    console.log("✅ You are eligible to vote.");
}

// If userAge is less than 18 and he/she is not a citizen or not registered, then he/she is not eligible to vote.

else if (userAge < 18 && (!isCitizen || !isRegistered)) {

    console.log("❌ You are not eligible to vote.");
}

// If userAge is greater than or equal to 18 and he/she is not a citizen, then he/she is not eligible to vote due to citizenship status.

else if (userAge >= 18 && !isCitizen) {

    console.log("❌ Not eligible due to citizenship status.");
}

// If userAge is greater than or equal to 18 and he/she is not registered, then he/she is not eligible to vote due to registration status.

else if (userAge >= 18 && !isRegistered) {

    console.log("❌ Not eligible due to registration status.");
}

else {

    console.log("⚠️ All edge cases handled.");
}

// 2️⃣ Even or Odd Number Checker

let number = 5;

// If number is divisible by 2, then it is an even number else it is an odd number.

console.log(number % 2 === 0 ? "🟢 Even number." : "🔴 Odd number.");

// 3️⃣ Positive, Negative or Zero Checker

let myNumber = 4;

// If number is greater than 0, then it is a positive number.

if (myNumber > 0) {

    console.log("➕ Positive number.");
}

// If number is less than 0, then it is a negative number.

else if (myNumber < 0) {

    console.log("➖ Negative number.");
}

// Else, it is a zero.

else {

    console.log("🟡 Number is zero.");
}

// 4️⃣ Leap Year Checker

let year = 2024;

// If the year is divisible by 4 and not divisible by 100, or if the year is divisible by 400, then it is a leap year.

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

    console.log(`📅 ${year} is a Leap Year.`);
}

// Else, it is not a leap year.

else {

    console.log(`📅 ${year} is not a Leap Year.`);
}

// 5️⃣ Largest of Three Numbers

let num1 = 45, num2 = 72, num3 = 89;

// If all numbers are equal, then print "All numbers are equal."

if (num1 === num2 && num2 === num3) {

    console.log("⚖️ All numbers are equal.");
}

// If num1 is greater than num2 and num1 is greater than num3, then print "num1 is the largest number."

else if (num1 > num2 && num1 > num3) {

    console.log(`${num1} is the 🔝 largest number.`);
}

// If num2 is greater than num1 and num2 is greater than num3, then print "num2 is the largest number."

else if (num2 > num1 && num2 > num3) {

    console.log(`${num2} is the 🔝 largest number.`);
}

// Else, num3 is the largest number.

else {

    console.log(`${num3} is the 🔝 largest number.`);
}

// 6️⃣ Vowel or Consonant Checker

let char = 'O'.toLowerCase();

// If the character is a lowercase alphabet, check if it is a vowel or a consonant.

if (char >= 'a' && char <= 'z') {

    // If the character is 'a', 'e', 'i', 'o', or 'u', print "Vowel".

    if ("aeiou".includes(char)) {

        console.log("🗣️ Vowel");
    }

    // Else, print "Consonant".

    else {

        console.log("🔡 Consonant");
    }
}

// Else, print "Invalid character input."

else {

    console.log("❌ Invalid character input.");
}

// 7️⃣ ATM Withdrawal System

let balance = 1000;

let withdrawAmount = 250;

// Check if the withdrawal amount is greater than the balance or not

if (withdrawAmount > balance) {

    console.log("💸 Insufficient funds.");
}

// Check if the withdrawal amount is a multiple of 10

else if (withdrawAmount % 10 !== 0) {

    console.log("💡 Enter a valid amount (multiple of 10).");
}

// Deduct the withdrawal amount from the balance

else {

    balance = balance - withdrawAmount;

    console.log(`✅ Withdrawal successful! 💰 Remaining balance: $${balance}`);
}

// 8️⃣ Switch Statement Example

let day = 3;

let dayName = "";

// If day is 1, then dayName is Monday and so on

switch (day) {

    case 1: dayName = "Monday"; break;

    case 2: dayName = "Tuesday"; break;

    case 3: dayName = "Wednesday"; break;

    case 4: dayName = "Thursday"; break;

    case 5: dayName = "Friday"; break;

    case 6: dayName = "Saturday"; break;

    case 7: dayName = "Sunday"; break;

    default: dayName = "Invalid day"; break;
}

console.log(`📆 Today is: ${dayName}`);

// 9️⃣ Calculator

let operator = "+";

let number1 = 10;

let number2 = 5;

let result;

switch (operator) {

    // If operator is +, then add number1 and number2

    case "+": result = number1 + number2; break;

    // If operator is -, then subtract number1 and number2

    case "-": result = number1 - number2; break;

    // If operator is *, then multiply number1 and number2

    case "*": result = number1 * number2; break;

    // If operator is /, then divide number1 and number2

    case "/": result = number1 / number2; break;

    // If operator is %, then modulo number1 and number2

    case "%": result = number1 % number2; break;

    // If operator is **, then raise number1 to the power of number2

    case "**": result = number1 ** number2; break;

    default: result = "Invalid operator"; break;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
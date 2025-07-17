console.clear();

/*

============================================================================

        🚀 JavaScript Operators Explained – For Frontend Developers

============================================================================

*/

// 1️⃣ Assignment Operators: 🎯

// These operators assign values to variables. The value on the right side is assigned to the variable on the left side.

console.log("📌 Assignment Operators:");

let score = 10;

console.log("score =", score); // 10

// Additional Examples:

score += 5; // Equivalent to: score = score + 5

console.log("score += 5:", score); // 15

score -= 3; // Equivalent to: score = score - 3

console.log("score -= 3:", score); // 12

score *= 2; // Equivalent to: score = score * 2

console.log("score *= 2:", score); // 24

score /= 4; // Equivalent to: score = score / 4

console.log("score /= 4:", score); // 6

score %= 2; // Equivalent to: score = score % 2

console.log("score %= 2:", score); // 0

// 2️⃣ Arithmetic Operators: 🧮

// These operators are used for mathematical calculations such as addition, subtraction, multiplication, division and modulus (remainder).

console.log("\n📌 Arithmetic Operators:");

let price = 10;

let discount = 5;

console.log("price + discount =", price + discount);  // 15

console.log("price - discount =", price - discount);  // 5

console.log("price * discount =", price * discount);  // 50

console.log("price / discount =", price / discount);  // 2

console.log("price % discount =", price % discount);  // 0 (remainder)

// Additional Example:

console.log("2 ** 3 =", 2 ** 3); // 8 (2 raised to the power of 3)

// 3️⃣ Comparison Operators: 🔍

// These operators compare values and return `true` or `false`.

console.log("\n📌 Comparison Operators:");

let marksJohn = 10;

let marksEmma = 15;

console.log("marksJohn == marksEmma:", marksJohn == marksEmma);   // false (checks only value)

console.log("marksJohn === marksEmma:", marksJohn === marksEmma); // false (checks value & type both)

console.log("marksJohn != marksEmma:", marksJohn != marksEmma);   // true  (not equal)

console.log("marksJohn > marksEmma:", marksJohn > marksEmma);     // false (marksJohn is less than marksEmma)

console.log("marksJohn < marksEmma:", marksJohn < marksEmma);     // true (marksJohn is greater than marksEmma)

console.log("marksJohn >= marksEmma:", marksJohn >= marksEmma);   // false (marksJohn is less than or equal to marksEmma)

console.log("marksJohn <= marksEmma:", marksJohn <= marksEmma);   // true (marksJohn is greater than or equal to marksEmma)

// Additional Example:

console.log('"5" == 5:', "5" == 5);   // true (value match, type ignored)

console.log('"5" === 5:', "5" === 5); // false (strict type check)

// 4️⃣ Logical Operators: 🤖

// Used to perform logical operations: AND (&&), OR (||), NOT (!)

console.log("\n📌 Logical Operators:");

let userAge = 20;

let requiredAge = 40;

console.log("userAge > requiredAge && userAge == requiredAge:", userAge > requiredAge && userAge == requiredAge); // false

console.log("userAge > requiredAge || userAge < requiredAge:", userAge > requiredAge || userAge < requiredAge);   // true

console.log("!(userAge > requiredAge):", !(userAge > requiredAge));                                               // true

// Additional Example:

console.log("true && false:", true && false);  // false

console.log("true || false:", true || false);  // true

console.log("!true:", !true);                  // false

// 5️⃣ Ternary Operator: 🎭

// A shorthand way to write `if-else` conditions.

console.log("\n📌 Ternary Operator:");

let personAge = 18;

let votingStatus = personAge >= 18 ? "Eligible to vote 🗳️" : "Not eligible to vote ❌";

console.log("Voting Eligibility:", votingStatus);

// Additional Example:

let inputNumber = 7;

console.log(inputNumber % 2 === 0 ? "Even Number" : "Odd Number"); // Odd Number
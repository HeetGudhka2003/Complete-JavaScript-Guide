// 🔁 JavaScript Loops Made Simple – For Aspiring Frontend Devs!

console.clear();

// 🚨 Why use loops?

// They help us execute a block of code repeatedly — as long as a condition holds true.

// ✅ 3 Common Types of Loops:

/*

1️⃣ while loop

2️⃣ do...while loop

3️⃣ for loop

*/

// ---------------------------------------------------------

// 🔄 1. while loop – Runs as long as the condition is true.

// ----------------------------------------------------------

console.log("🔥 while loop:");

let count = 1;

while (count <= 5) {

    // Prints 1, 2, 3, 4, 5

    console.log(count);

    count++;
}

// -------------------------------------------------------------

// 🔁 2. do...while loop – Runs the block of code at least once

// -------------------------------------------------------------

console.log("🚀 do...while loop:");

let start = 6;

do {

    // Prints 6, 7, 8, 9, 10

    console.log(start);

    start++;

} while (start <= 10);

// -----------------------------------------------------------

// 🎯 3. for loop – Best when you know how many times to run.

// -----------------------------------------------------------

console.log("🎯 for loop:");

for (let i = 11; i <= 15; i++) {

    // Prints 11, 12, 13, 14, 15

    console.log(i);
}
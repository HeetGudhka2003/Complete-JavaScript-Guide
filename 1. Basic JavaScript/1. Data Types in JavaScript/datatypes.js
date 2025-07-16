console.clear();

// 🔥 Mastering JavaScript Data Types — A Frontend Developer's Essentials 💻

// ✅ Data Types are classified into two main categories: Primitive and Non-Primitive

/*

🔹 Primitive Data Types:

   ✔ Immutable (cannot be changed)

   ✔ Stored in Stack memory

   ✔ Fast access

🔹 Non-Primitive Data Types:

   ✔ Mutable (can be changed)

   ✔ Stored in Heap memory

   ✔ Slower access

This understanding is crucial when dealing with performance, memory leaks and reference vs value behavior in frontend development.

*/

// ✅ Primitive Data Types in JavaScript

// 1️⃣ Number: For all numeric values (integers, decimals and exponential notation)

let score = 99;

let pi = 3.14159;

console.log("score:", score);

console.log("Type:", typeof score);

console.log("pi:", pi);

console.log("Type:", typeof pi);

// 2️⃣ String: Sequence of characters wrapped in quotes. We use double quotes when it's a sentence or a paragraph and single quotes when it's a single word.

let fullName = "Heet Gudhka";

let nickName = 'Heet';

console.log("fullName:", fullName);

console.log("Type:", typeof fullName);

console.log("nickName:", nickName);

console.log("Type:", typeof nickName);

// 3️⃣ Boolean: true or false — perfect for logic & UI conditions

let isLoggedIn = true;

let hasPermission = false;

console.log("isLoggedIn:", isLoggedIn);

console.log("Type:", typeof isLoggedIn);

console.log("hasPermission:", hasPermission);

console.log("Type:", typeof hasPermission);

// 4️⃣ Undefined: Declared but not assigned any value

let currentTask;

console.log("currentTask:", currentTask);

console.log("Type:", typeof currentTask);

// 5️⃣ Null: Explicit absence of value — used intentionally

let selectedTheme = null;

console.log("selectedTheme:", selectedTheme);

console.log("Type:", typeof selectedTheme); // typeof null → 'object' (legacy bug in JS)

// 6️⃣ BigInt: For values larger than 2^53 - 1

const worldPopulation = 1234567890123456789012345678901234567890n;

console.log("worldPopulation:", worldPopulation);

console.log("Type:", typeof worldPopulation);

// 7️⃣ Symbol: Unique and immutable — used for object keys and constants

const appID = Symbol("app_id");

console.log("appID:", appID);

console.log("Type:", typeof appID);

// 🔎 Bonus Tip: Max Safe Integer in JavaScript

console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);

/*

Non Primitive Data Types in JavaScript

It includes:

🧱 Object

🔁 Array

🧠 Function

📆 Date

📚 Set

Stay tuned as we deep dive into how non-primitive data types work in JavaScript.

*/
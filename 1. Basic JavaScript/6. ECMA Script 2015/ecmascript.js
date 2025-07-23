console.clear();

/* 

🔹 var Keyword

- Function-scoped

- Can be reassigned

- Hoisted (but initialized with undefined)

- Does NOT support block scope

*/

var a = 5;

console.log(a); // 5

a = 10;

console.log(a); // 10

/* 

🔹 let Keyword

- Block-scoped

- Can be reassigned

- Cannot be redeclared in the same scope

*/

let x = 10;

console.log(x); // 10

x = 20;

console.log(x); // 20

// let x = 30; ❌ SyntaxError: Identifier 'x' has already been declared

/* 

🔹 const Keyword

- Block-scoped

- Cannot be reassigned or redeclared

- Must be initialized at the time of declaration

*/

const y = 30;

console.log(y); // 30

// y = 40; ❌ TypeError: Assignment to constant variable


/* 

🔹 Template Literals (ES6)

- Cleaner and more readable string concatenation

- Supports interpolation using ${}

*/

let firstName = "John";

let lastName = "Doe";

let message = `Hello, My Name is ${firstName} ${lastName}!`;

console.log(message); // Hello, My Name is John Doe!
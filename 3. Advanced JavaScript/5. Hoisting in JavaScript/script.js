console.clear();

/*

Hoisting is a behavior where variable and function declarations are moved to the top of their scope (either global or function) before code execution.

Variables declared with var are hoisted to the top and initialized with undefined. You can use them before declaration (not recommended).

Variables declared with let or const are hoisted but not initialized. They are in a Temporal Dead Zone (TDZ) from the start of the block until the declaration is encountered.

*/

console.log(a); // undefined

var a = 10;

console.log(a); // 10

/*

Behind the scenes:

var a;          // hoisted and initialized to undefined

console.log(a); // undefined

a = 10;

console.log(a); // 10

*/

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization

let b = 20;

console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization

const c = 30;

// Calling the function before its declaration works perfectly

greet(); // ✅ Output: "Hello from a hoisted function!"

function greet() {
    
    console.log("Hello from a hoisted function!");
}
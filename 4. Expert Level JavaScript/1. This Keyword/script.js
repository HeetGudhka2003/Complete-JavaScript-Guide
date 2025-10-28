console.clear();

// 💻 Example 1 – Global Context

// In browser → Window object and  Node JS → Global object

console.log(this); // Empty object

// 💻 Example 2 – Inside a Function

function showThis() {

    console.log(this);
}

// In non–strict mode → window (global), in strict mode → undefined

showThis();

// 💻 Example 3 – Inside an Object

const person = {

    name: "Heet",

    greet: function () {

        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // "Hello, my name is Heet"

// 💻 Example 4 – Losing this

const person2 = {

    name: "Rohit",

    greet: function () {

        console.log(`Hello, ${this.name}`);
    }
};

const greetFn = person2.greet;

greetFn(); // ❌ 'this' is undefined (or window) because we lost the context

// 💻 Example 5 – Arrow Functions & this

const user = {

    name: "Ketan",

    showName: () => {

        console.log(this.name);
    }
};

user.showName(); // undefined ❌

// Arrow functions don’t have their own this — they inherit it from their lexical scope.
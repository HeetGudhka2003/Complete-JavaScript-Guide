console.clear();

// 💻 Example 1 – Basic Prototype Link

// 'person' object with a greet method

const person = {

    greet() {

        console.log("Hello from person!");
    }
};

// 'student' object with a study method

const student = {

    study() {

        console.log("Studying hard...");
    }
};

// Set student's prototype to person

// This means 'student' will inherit all properties and methods of 'person'

student.__proto__ = person;

// Call methods

student.greet(); // Found in 'person' via prototype chain

student.study(); // Found directly in 'student'

// 🧠 Explanation:

// JavaScript looks for 'greet()' in 'student'.

// Since it's not there, it goes up the prototype chain to 'person' and finds it there.


// 💻 Example 2 – Using Object.create()

// Create a new object 'employee' whose prototype is 'person'

const employee = Object.create(person);

// Add a new method to 'employee'

employee.work = function () {

    console.log("Working..");
};

// 'employee' can access both its own and its prototype's methods

employee.greet(); // Found in 'person'

employee.work();  // Found in 'employee'

// 🧠 Explanation:

// Object.create() creates a new object and directly links it to the specified prototype.


// 💻 Example 3 – Function Constructor Prototype Example

// Constructor function to create User objects

function User(name, age) {

    this.name = name;

    this.age = age;
}

// Add a shared method to User's prototype

// All instances of User will have access to this without duplicating it in memory

User.prototype.sayHi = function () {

    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Create a new User instance

const user1 = new User("John", 30);

// Call the shared prototype method

user1.sayHi();

// 🧠 Explanation:

// 'sayHi' is not defined directly on 'user1', but found on User.prototype, which 'user1' inherits from.


// 💻 Example 4 – Prototype Chain Visualization

// Check if user1's prototype is the same as User.prototype

console.log(user1.__proto__ === User.prototype); // ✅ true

// Check if User.prototype's prototype is Object.prototype

console.log(User.prototype.__proto__ === Object.prototype); // ✅ true

// The end of the prototype chain is always null

console.log(Object.prototype.__proto__); // ✅ null

// 🧠 Explanation:

// Every object in JavaScript ultimately inherits from Object.prototype, which forms the base of the prototype chain.


// 💻 Example 5 – ES6 Class Syntax (Syntactic Sugar)

// Define a base class 'Animal'

class Animal {

    constructor(name) {

        this.name = name;
    }

    // Method available to all Animal instances

    speak() {

        console.log(`${this.name} makes a noise.`);
    }
}

// Define a subclass 'Dog' that extends 'Animal'

class Dog extends Animal {

    // Override the speak method from Animal

    speak() {

        console.log(`${this.name} barks!`);
    }
}

// Create an instance of Dog

const dog = new Dog("Buddy");

// Call the overridden method

dog.speak(); // Output: Buddy barks!

// 🧠 Explanation:

// 'Dog' inherits from 'Animal' using 'extends'.

// The 'super' keyword (not used here) can call parent class methods.

// ES6 classes are just syntactic sugar over prototypes for cleaner, modern syntax.
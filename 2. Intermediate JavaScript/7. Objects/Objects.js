console.clear();

// Objects in JavaScript

// An object is a collection of key value pairs where each key is a string and each value can be of other data types including other objects.

let person = {

    name: "Vinod",

    age: 30,

    isStudent: false,

    greet: function () {

        console.log("Hi I am " + this.name);
    }
}

person.greet();

console.log(person);

// Adding new properties

person.country = "India";

person.jobTitle = "Software Engineer";

console.log(person);

// Deleting properties

delete person.isStudent;

console.log(person);

// Object Methods

/*

1. Object.keys() - Returns an array of the object's own enumerable property names.

2. Object.values() - Returns an array of the object's own enumerable property values.

3. Object.entries() - Returns an array of the object's own enumerable string-keyed property [key, value] pairs.

4. Object.assign() - Copies all enumerable own properties from one or more source objects to a target object.

5. Object.fromEntries() - Creates an object from an array of key-value pairs.

6. Object.entries() - Returns an array of the object's own enumerable string-keyed property [key, value] pairs.

*/

const product = {

    name: "Laptop",

    price: 30000,

    brand: "Apple",

    stock: 50
}

let keys = Object.keys(product);

console.log(keys);

let values = Object.values(product);

console.log(values);

let entries = Object.entries(product);

console.log(entries);

let copy = Object.assign({}, product);

console.log(copy);

let fromEntries = Object.fromEntries(entries);

console.log(fromEntries);
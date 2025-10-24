/*

 A closure is created when a function is defined inside another function and gains access to the outer function's variables even after the outer function has finished executing.

*/

// Clears the console to remove previous logs

console.clear();

// Function that creates and returns a counter function

function createCounter() {

    // Private variable initialized to 0

    let count = 0;

    // Returns an inner function that has access to `count` via closure

    return function () {

        // Increments the private count

        count++;

        // Returns the updated count

        return count;
    }
}

// Create a new counter function instance

const counter = createCounter();

// Each call to counter() will increment and return the internal `count`

console.log(counter());

console.log(counter());

console.log(counter());
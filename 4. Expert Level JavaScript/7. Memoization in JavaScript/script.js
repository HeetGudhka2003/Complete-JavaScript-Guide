console.clear();

/*

--------------------------------------------------------------------

💡 MEMOIZATION FUNCTION

--------------------------------------------------------------------

memoize(fn) takes a function and returns a new optimized version of it. It stores results in a cache so that next time the same input comes, the answer is returned instantly without recalculating.

--------------------------------------------------------------------

*/

const memoize = (fn) => {

    // Cache object to store previous results

    const cache = {};

    return function (num) {

        // If the result already exists → return from cache

        if (cache[num]) {

            console.log("🔁 Returned from Cache:", num);

            return cache[num];
        }

        // If result does NOT exist → compute it

        console.log("⚡ Calculated Fresh:", num);

        const result = fn(num); // Call the original heavy function

        // Store the computed result inside cache

        cache[num] = result;

        // Return the computed result

        return result;
    };
};

/*

--------------------------------------------------------------------

⏳ A VERY SLOW FUNCTION (simulating heavy calculations)

--------------------------------------------------------------------

slowSquare(num) calculates the square of a number BUT includes

a time-consuming loop to simulate a heavy CPU task like:

- Complex mathematical calculation

- Image processing

- Large dataset manipulation

- API data processing

--------------------------------------------------------------------

*/

const slowSquare = (num) => {

    // Fake heavy processing

    for (let i = 0; i < 1000000000; i++) {}

    return num * num;
};

// Create a memoized (optimized) version of slowSquare

const memoizedSquare = memoize(slowSquare);

/*

--------------------------------------------------------------------

🧪 TESTING THE MEMOIZED FUNCTION

--------------------------------------------------------------------

First call     → Slow (actual calculation happens)

Second call    → Instant (result returned from cache)

--------------------------------------------------------------------

*/

console.log(memoizedSquare(5));   // Fresh compute

console.log(memoizedSquare(5));   // From cache

console.log(memoizedSquare(10));  // Fresh compute

console.log(memoizedSquare(10));  // From cache
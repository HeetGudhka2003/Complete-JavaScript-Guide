console.clear();

/*

Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take one argument.

*/

// Step 1️⃣ — Define a curried function

const calculateFinalPrice = (category) => (discount) => (tax) => (price) => {

    // Calculate discount

    let discountedPrice = price - (price * discount) / 100;

    // Calculate final price with tax

    let finalPrice = discountedPrice + (discountedPrice * tax) / 100;

    console.log(`\nCategory: ${category}, Price: ₹${price}, Discount: ${discount}%, Tax: ${tax}%, Final: ₹${finalPrice.toFixed(2)}`);

    return finalPrice;
}

// Step 2️⃣ — Create specialized calculators

// For electronics — usually 10% discount, 18% tax

const electronicCalculator = calculateFinalPrice("Electronics")(10)(18);

// For clothing — 20% discount, 12% tax

const clothingCalculator = calculateFinalPrice("Clothing")(20)(12);

// For food — 5% discount, 5% tax

const foodCalculator = calculateFinalPrice("Food")(5)(5);

// Step 3️⃣ — Use the configured functions

electronicCalculator(50000); // ₹50000 → Discount → Tax → Final Price

clothingCalculator(2000); // ₹2000 → Discount → Tax → Final Price

foodCalculator(1000); // ₹1000 → Discount → Tax → Final Price
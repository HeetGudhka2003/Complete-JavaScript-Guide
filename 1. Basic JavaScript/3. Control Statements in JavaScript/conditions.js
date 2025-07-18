/*

=====================================================================

                    Control Flow Statements 🔥

=====================================================================

*/

console.clear();

/*

Control Statements are essential for decision-making. They allow you to execute different code paths based on various conditions. 

If else statements are used when you want to execute different code blocks based on different conditions.

But writing nested if else statements is not recommended. It can lead to complex and unreadable code.

Instead, use switch statements to handle multiple conditions in a single expression. If nothing matches, the default block is executed.

*/

// 🌡️ Temperature Message Based on Value

let temperature = 25;

// If temperature is above 35, print "It's extremely hot outside. Stay hydrated!"

if (temperature > 35) {

    console.log("🔥 It's extremely hot outside. Stay hydrated!");
}

// If temperature is above 25, print "It's warm outside. A great day to go out!"

else if (temperature > 25) {

    console.log("☀️ It's warm outside. A great day to go out!");
}

// If temperature is above 15, print "It's a pleasant day."

else if (temperature > 15) {

    console.log("🌤️  It's a pleasant day.");
}

// Else, print "It's cold outside. Wear warm clothes!"

else {

    console.log("🧥 It's cold outside. Wear warm clothes!");
}

// Switch Statement

let month = 7;

// If number entered is 1, print "January" and so on.

switch (month) {

    case 1: console.log("January"); break;

    case 2: console.log("February"); break;

    case 3: console.log("March"); break;

    case 4: console.log("April"); break;

    case 5: console.log("May"); break;

    case 6: console.log("June"); break;

    case 7: console.log("July"); break;

    case 8: console.log("August"); break;

    case 9: console.log("September"); break;

    case 10: console.log("October"); break;

    case 11: console.log("November"); break;

    case 12: console.log("December"); break;

    default: console.log("Invalid month");
}

/*

📌 Pro Tip: Control statements like these are key when showing/hiding components, handling user inputs, or applying logic before rendering data. Keep it clean, readable and scalable! 🚀

*/
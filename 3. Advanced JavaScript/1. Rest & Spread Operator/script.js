/* ------------------------------------------------------------------

1. Example: Fetch API Data & Use REST Operator to Remove Password

------------------------------------------------------------------ */

// Fake array of users (like an API response)

const fakeUsers = [

    { id: 1, name: "Heet", email: "heet@example.com", password: "secret123" },

    { id: 2, name: "Aisha", email: "aisha@example.com", password: "pass456" }
];

/*

We want to display user data, BUT for security reasons, we should never display the password.

👉 Trick: Use object destructuring with the REST operator (...) to remove the `password` field while keeping the other properties.

*/

const safeUsers = fakeUsers.map((user) => {

    // Extract `password`, then collect the remaining properties into safeUser

    const { password, ...safeUser } = user;

    return safeUser; // return the "safe" user object without password
});

// Select the <div id="user-list"> from HTML to display users

const userList = document.getElementById("user-list");

// Loop through safeUsers and create HTML elements for each

safeUsers.forEach((user) => {

    const div = document.createElement("div"); // create a new <div>

    div.className = "user-card"; // add a class for styling

    // Fill the div with user info (name + email only, password removed)

    div.innerHTML = `<strong>Name:</strong> ${user.name}<br> <strong>Email:</strong> ${user.email}`;

    // Finally, add this div inside the #user-list container

    userList.appendChild(div);
});


/* ------------------------------------------------------------------

2. Example: Merge Default Settings with User Settings (Spread Operator)

------------------------------------------------------------------ */

// Default website settings

const defaultSettings = { theme: "light", notifications: true, language: "en" };

// Suppose the user changed some settings

const userSettings = { theme: "dark", language: "fr" };

/*

👉 Spread operator (...) allows us to merge objects easily. If properties overlap, later values overwrite earlier ones. Here, userSettings will overwrite defaultSettings.

*/

const mergedSettings = { ...defaultSettings, ...userSettings };

// Show the merged settings inside the <div id="settings"> in formatted JSON

document.getElementById("settings").textContent = JSON.stringify(mergedSettings, null, 2);

/*

⚡ JSON.stringify(obj, null, 2)  

   - Converts object to JSON string

   - `null` means no special filtering

   - `2` means add indentation (pretty printing with 2 spaces)
*/


/* ------------------------------------------------------------------

3. Example: Create Dynamic Form Inputs with Rest Operator

------------------------------------------------------------------ */

// Get the form and the extra-fields container from HTML

const form = document.getElementById("userForm");

const extraFieldsContainer = document.getElementById("extra-fields");

// Add functionality: when "Add Extra Field" button is clicked

document.getElementById("addField").addEventListener("click", () => {

    // Create a new <input>

    const input = document.createElement("input");

    input.type = "text"; // input type will be "text"

    input.placeholder = "Extra Field"; // placeholder text

    input.required = true; // make it mandatory

    // Append the new input inside the "extra-fields" section of the form

    extraFieldsContainer.appendChild(input);

    // Optional: add line break after each new input for clarity

    extraFieldsContainer.appendChild(document.createElement("br"));
});

// When the form is submitted

form.addEventListener("submit", (event) => {

    event.preventDefault(); // stop page from refreshing

    // Get ALL inputs inside the form (including extra ones)

    const inputs = Array.from(form.querySelectorAll("input"));

    /*

    Use destructuring with rest operator:

    - First two inputs → firstName, lastName

    - The remaining inputs → extraFields (as an array)

    */

    const [firstName, lastName, ...extraFields] = inputs.map((input) => input.value);

    // Show the collected data in an alert box

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nExtra Fields:\n${extraFields.join("\n")}`);

    // Reset the form (clears inputs)
    
    form.reset();
});
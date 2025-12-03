// Array of user names to be searched from

const users = [

    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Williams",
    "Evelyn Taylor",
    "Frank Miller",
    "Grace Lee",
    "Hannah Davis",
    "Ian Thomas"

];

// Get DOM elements

const SearchInput = document.getElementById("search");     // Search input field

const usersList = document.getElementById("usersList");     // List container to display users

const noResults = document.getElementById("noResults");     // Message to show when no results are found

// Function to display the list of users on the screen

const displayUsers = (users) => {

    // Clear the previous list

    usersList.innerHTML = "";

    // If no users match the search, show "no results" message

    if (users.length === 0) {

        noResults.style.display = "block";

        return;
    }

    // Hide "no results" message when matches exist

    noResults.style.display = "none";

    // Create and append <li> elements for each user

    users.forEach((user) => {

        const li = document.createElement("li");

        li.textContent = user;

        usersList.appendChild(li);

    });
};

// Debounce function: delays execution of the passed function until user stops typing for a given delay

const debounce = (fn, delay) => {

    let timeoutId;  // Stores the ID of the timeout between key presses

    return (...args) => {

        // Clear the previous timeout if user types again

        clearTimeout(timeoutId);

        // Set a new timeout to run the function after 'delay' ms

        timeoutId = setTimeout(() => {

            fn(...args); // Call the original function with arguments

            console.log("Debounced fired after", delay / 1000, "seconds");

        }, delay);
    };
};

// Function to filter users based on input value

const searchUsers = (users) => {

    // Convert both the input and usernames to lowercase for case-insensitive search

    const filteredUsers = users.filter((user) => user.toLowerCase().includes(SearchInput.value.toLowerCase()));

    // Display the filtered users

    displayUsers(filteredUsers);
};

// Initially display all users

displayUsers(users);

// Create a debounced version of the search function (runs after 1 second of no key presses)

const debouncedSearchUsers = debounce(searchUsers, 1000);

// Add input event listener to trigger search as user types

SearchInput.addEventListener("input", () => {

    debouncedSearchUsers(users); // Pass full user list to search function
    
});
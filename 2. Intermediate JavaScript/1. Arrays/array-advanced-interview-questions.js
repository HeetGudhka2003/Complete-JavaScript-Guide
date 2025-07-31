// 🔄 Clear Console

console.clear();

// 👥 Array of Objects: Users Data

const users = [

    {
        id: 1,
        name: "Ajay Suneja",
        isActive: true,
        age: 31,
        designation: "Front End Developer",
    },

    {
        id: 2,
        name: "Manohar Batra",
        isActive: true,
        age: 36,
        designation: "Solution Architect",
    },

    {
        id: 3,
        name: "Dimple Kumari",
        isActive: true,
        age: 26,
        designation: "Software Engineer",
    },

    {
        id: 4,
        name: "Anshika Gupta",
        isActive: false,
        age: 25,
        designation: "Back End Developer",
    },
];

/*

=================================

💡 Use Case 1: Get Array of Names

=================================

*/

// ✅ Method 1: Using for loop

const namesUsingForLoop = [];

for (let i = 0; i < users.length; i++) {

    namesUsingForLoop.push(users[i].name);
}

console.log("📦 Names using for loop:", namesUsingForLoop);

// ✅ Method 2: Using map()

const namesUsingMap = users.map((user) => user.name);

console.log("📦 Names using map():", namesUsingMap);

/*

=====================================

💡 Use Case 2: Get Only Active Users

=====================================

*/

// ✅ Method 1: Using forEach()

const activeUsersUsingForEach = [];

users.forEach((user) => {

    if (user.isActive) {

        activeUsersUsingForEach.push(user.name);
    }
});

console.log("✅ Active users (forEach):", activeUsersUsingForEach);

// ✅ Method 2: Using filter()

const activeUsersUsingFilter = users.filter((user) => user.isActive);

console.log("✅ Active users (filter):", activeUsersUsingFilter);

/*

=============================================

💡 Use Case 3: Sort Users by Age (Descending)

=============================================

*/

// 📌 Chaining: filter() + sort() + map()

const sortedActiveUsers = users

    .filter((user) => user.isActive)

    .sort((a, b) => b.age - a.age)
    
    .map((user) => user);

console.log("⬇️ Sorted Active Users (by age):", sortedActiveUsers);
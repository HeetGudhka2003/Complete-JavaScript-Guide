// Clear the console before running this script for cleaner output

console.clear();

/* 
=====================================================================

                Object Interview Questions 🚀

===================================================================== 
   
*/

/*

1. Compare two objects for equality in terms of properties and values.

*/

// Define first object with 3 properties

let obj1 = { name: "Vinod", age: 30, isStudent: false };

// Define second object with 4 properties (extra 'country')

let obj2 = { name: "Vinod", age: 30, isStudent: false, country: "India" };

// Function to compare two objects

const compareObjects = (obj1, obj2) => {

    // Compare the number of keys in both objects

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {

        return false; // If not equal in length, they are not equal
    }

    // Loop through each key in obj1

    for (let key in obj1) {

        // Check if the value for the current key is not equal in both objects

        if (obj1[key] !== obj2[key]) {

            return false; // If mismatch found, return false
        }
    }

    // If all keys matched, return true

    return true;
}

// Test the function

console.log(compareObjects(obj1, obj2)); // false

/*

2. Add a new subject & grade to a student's record.

*/

// Student object with nested grades object

let studentData = {

    name: "Bobby",

    age: 21,

    grades: {

        Maths: 90,

        Science: 85,

        History: 88
    }
}

// Function to add a subject and marks to the student object

const addSubject = (student, subject, marks) => {

    // Check if 'grades' property exists

    if (!student.grades) {

        student.grades = {}; // If not, create it
    }

    // Add the subject and marks to grades

    return (student.grades[subject] = marks);
}

// Add "English" subject with marks 95

addSubject(studentData, "English", 95);

// Print updated student data

console.log(studentData);

// Employee object with nested personalInfo object

let employeeData = {

    name: "John",

    age: 30,

    personalInfo: {

        address: "123 Main St",

        phone: "555-555-5555"
    }
}

// Function to add email property inside personalInfo

const addEmail = (employee, email) => {

    return employee.personalInfo.email = email; // Assign new email property
}

// Add email to employeeData

addEmail(employeeData, "i8o9g@example.com");

console.log(employeeData); // Check updated object

// Function to delete email from personalInfo

const deleteEmail = (employee) => {

    delete employee.personalInfo.email; // Remove email property
}

// Delete email from employeeData

deleteEmail(employeeData);

console.log(employeeData); // Check updated object

/*

3. Shallow clone an object using spread operator.

*/

// Function to clone object (shallow copy)

const cloneObject = (obj) => {

    return { ...obj }; // Spread operator copies only first-level properties
}

// Original object with nested address object

let originalObject = {

    name: "Alice",

    age: 25,

    address: {

        city: "New York",

        state: "NY"
    }
}

// Clone originalObject

let clone = cloneObject(originalObject);

console.log(clone); // Shows copied object

// Modify nested property in cloned object

clone.address.city = "San Francisco";

// Since it's a shallow copy, original object's nested object is also modified

console.log(clone); // Shows updated city

console.log(originalObject); // Also shows updated city

/*

4. Merge two objects. Second object's keys overwrite first's if same.

*/

// Function to merge two objects

const mergeObjects = (obj1, obj2) => {

    return { ...obj1, ...obj2 }; // Spread both objects, second overwrites
}

// First object

const firstObj = { x: 1, y: 2 };

// Second object (y overwrites)

const secondObj = { y: 3, z: 4 };

// Print merged result

console.log(mergeObjects(firstObj, secondObj));

/*

5. Count number of properties in an object.

*/

// Function to count number of keys

const countProperties = (obj) => {

    return Object.keys(obj).length; // Object.keys returns array of keys
}

// Print number of keys in example object

console.log("The number of properties (keys) in the object is ", countProperties({ x: 1, y: 2, z: 3 }));

/*

6. Check if a property exists in an object.

*/

// Function to check property existence
const hasProperty = (obj, key) => {

    return obj.hasOwnProperty(key); // Returns true if property exists directly on object
}

// Example object

let user = {

    id: 1,

    username: "John Doe"
}

console.log(hasProperty(user, "id")); // true

console.log(hasProperty(user, "email")); // false

/*

7. Convert object to array of key-value pairs.

*/

// Function to get array of [key, value] pairs

const ObjectToPairs = (obj) => {

    return Object.entries(obj); // Returns array of arrays
}

console.log(ObjectToPairs({ a: 1, b: 2, c: 3 }));

/*

8. Remove a specific key from an object.

*/

// Function to remove key

const removeKey = (obj, key) => {

    delete obj[key]; // Deletes the key from object

    return obj; // Return updated object
}

// Example

let item = { id: 1, name: "IPhone", price: 100000 };

console.log(removeKey(item, "id"));

/*

9. Iterate over all keys and values in an object.

*/

// Function to print key-value pairs
const printObject = (obj) => {

    for (let [key, value] of Object.entries(obj)) { // Destructure [key, value]

        console.log(`${key}: ${value}`); // Print in key: value format
    }
}

// Example object

let userProfile = { name: "Sara", Profession: "Software Engineer" };

printObject(userProfile);

/*

10. Get only keys or values from an object.

*/

// Example object

let sampleObj = { a: 10, b: 20, c: 30 };

// Get all keys

console.log(Object.keys(sampleObj));

// Get all values

console.log(Object.values(sampleObj));

/*

11. Convert an object to a JSON string.

*/

// Function to stringify object

const objectToString = (obj) => {

    return JSON.stringify(obj); // Converts to JSON string
}

console.log(objectToString({ name: "John", age: 25, city: "New York" }));

/*

12. Convert a JSON string back to an object.

*/

// Function to parse JSON string

const stringToObject = (str) => {

    return JSON.parse(str); // Converts string to object
}

console.log(stringToObject('{"name": "John", "age": 25, "city": "New York"}'));

/*

13. Check if an object is empty.

*/

// Function to check if object has zero keys

const isEmptyObject = (obj) => {

    return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); // true

console.log(isEmptyObject({ name: "John", age: 25 })); // false

/*

14. Get the first key in an object.

*/

// Function to get first key

const getFirstKey = (obj) => {

    return Object.keys(obj)[0];
}

console.log(getFirstKey({ a: 1, b: 2, c: 3 }));

/*

15. Get the last key in an object.

*/

// Function to get last key

const getLastKey = (obj) => {

    return Object.keys(obj)[Object.keys(obj).length - 1];
}

console.log(getLastKey({ a: 11, b: 22, c: 33 }));

/*

16. Get the first value in an object.

*/

// Function to get first value

const getFirstValue = (obj) => {

    return Object.values(obj)[0];
}

console.log(getFirstValue({ a: 100, b: 200, c: 300 }));

/*

17. Get the last value in an object.

*/

// Function to get last value

const getLastValue = (obj) => {

    return Object.values(obj)[Object.values(obj).length - 1];
}

console.log(getLastValue({ a: 1000, b: 2000, c: 3000 }));

/*

18. Get the first key-value pair in an object.

*/

// Function to get first entry

const getFirstKeyValuePair = (obj) => {

    return Object.entries(obj)[0];
}

console.log(getFirstKeyValuePair({ a: 1, b: 2, c: 3 }));

/*

19. Get the last key-value pair in an object.

*/

// Function to get last entry

const getLastKeyValuePair = (obj) => {

    return Object.entries(obj)[Object.entries(obj).length - 1];
}

console.log(getLastKeyValuePair({ a: 10000, b: 20000, c: 30000 }));

/*

20. Get sum of all values in an object.

*/

// Function to sum values

const getSumOfValues = (obj) => {

    return Object.values(obj).reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(getSumOfValues({ a: 10, b: 20, c: 30 }));

/*

21. Get average of all values in an object.

*/

// Function to average values

const getAverageOfValues = (obj) => {

    return Object.values(obj).reduce((acc, currentValue) => acc + currentValue, 0) / Object.values(obj).length;
}

console.log(getAverageOfValues({ a: 10, b: 20, c: 30 }));

/*

22. Get maximum value in an object.

*/

// Function to find max value

const getMaxValue = (obj) => {

    return Math.max(...Object.values(obj));
}

console.log(getMaxValue({ a: 10, b: 20, c: 30 }));

/*

23. Get minimum value in an object.

*/

// Function to find min value

const getMinValue = (obj) => {

    return Math.min(...Object.values(obj));
}

console.log(getMinValue({ a: 10, b: 20, c: 30 }));

/*

24. Get length of the longest key in an object.

*/

// Function to find length of longest key

const getLongestKey = (obj) => {

    return Math.max(...Object.keys(obj).map((key) => key.length));
}

console.log(getLongestKey({ a: 10, b: 20, c: 30 }));

/*

25. Get length of the shortest key in an object.

*/

// Function to find length of shortest key

const getShortestKey = (obj) => {
    
    return Math.min(...Object.keys(obj).map((key) => key.length));
}

console.log(getShortestKey({ a: 10, b: 20, c: 30 }));
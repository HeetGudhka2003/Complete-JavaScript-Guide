console.clear();

// Strings in JavaScript: It is a sequence of characters either enclosed in single or double quotes. They are immutable and cannot be changed.

let str = "This is my first string";

console.log(str);

// It also includes the space character in the length.

console.log("The length of the string is: " + str.length);

// String Search Methods

/*

1. indexOf(): It returns the index of the first occurrence of the specified substring in the string.

2. lastIndexOf(): It returns the index of the last occurrence of the specified substring in the string.

3. from(): It converts a string into an array of characters.

4. search(): It returns the index of the first occurrence of the specified substring in the string.

5. match(): It returns an array of match results and null if no match is found.

6. matchAll(): It returns an iterator of all match results.

7. startsWith(): It returns true if the string starts with the specified substring.

8. endsWith(): It returns true if the string ends with the specified substring.

9. includes(): It returns true if the string contains the specified substring.

10. slice(): It extracts a part of the string and returns a new extracted string. It will exclude the last index.

11. substring(): It extracts a part of the string and returns a new extracted string. It will exclude the last index. It is similar to slice(). The difference is that it allows negative indexes.

12. at(): It returns the character at the specified index.

13. charAt(): It returns the character at the specified index. It is similar to at(). The difference is that it does not allows negative indexes.

14. replace(): It replaces the first occurrences of a substring or character with another substring or character.

15. replaceAll(): It replaces all occurrences of a substring or character with another substring or character.

16. trim(): It removes all leading and trailing white spaces from a string.

17. trimStart(): It removes all leading white spaces from a string.

18. trimEnd(): It removes all trailing white spaces from a string.

19. toLowerCase(): It converts a string to lowercase.

20. toUpperCase(): It converts a string to uppercase.

21. split(): It splits a string into an array of substrings based on the specified separator.

*/

let myName = "Hello JavaScript, Welcome to World's Best JavaScript Community";

console.log("The first index of 'a' is: " + myName.indexOf("a")); // 2

console.log("The last index of 'a' is: " + myName.lastIndexOf("a")); // 17

console.log(Array.from(myName)); // [h, e, l, l, o, , , J, a, v, a, s, c, r, i, p, t, , , W, e, l, c, o, m, e, , t, o, , W, o, r, l, d, 's, B, e, s, t, , J, a, v, a, s, C, o, m, m, u, n, i, t, y]

console.log("The index of 'JavaScript' is: " + myName.search("JavaScript")); // 6

let resultMatch = myName.match("JavaScript"); // [JavaScript]

console.log(resultMatch);

let resultMatchAll = myName.matchAll("JavaScript"); // [JavaScript]

console.log(...resultMatchAll);

let resultStartsWith = myName.startsWith("Hello"); // true

console.log(resultStartsWith);

let resultEndsWith = myName.endsWith("community"); // false

console.log(resultEndsWith);

let resultIncludes = myName.includes("JavaScript"); // true

console.log(resultIncludes);

let resultSlice = myName.slice(0, 16); // Hello JavaScript

console.log(resultSlice);

let resultSubstring = myName.substring(0, 16); // Hello JavaScript

console.log(resultSubstring);

let resultAt = myName.at(0); // H

console.log(resultAt);

let resultCharAt = myName.charAt(3); // l

console.log(resultCharAt);

let resultReplace = myName.replace("JavaScript", "JavaScript Programming"); // Hello JavaScript Programming

console.log(resultReplace);

let resultReplaceAll = myName.replaceAll("JavaScript", "JavaScript Programming"); // Hello JavaScript Programming

console.log(resultReplaceAll);

let resultTrim = myName.trim(); // Hello JavaScript, Welcome to World's Best JavaScript Community

console.log(resultTrim);

let resultUpperCase = myName.toUpperCase(); // HELLO JAVASCRIPT, WELCOME TO WORLD'S BEST JAVASCRIPT COMMUNITY

console.log(resultUpperCase);

let resultLowerCase = myName.toLowerCase(); // hello javascript, welcome to world's best javascript community

console.log(resultLowerCase);

let resultSplit = myName.split(" "); // [Hello, JavaScript, Welcome, to, World's, Best, JavaScript, Community]

console.log(resultSplit);
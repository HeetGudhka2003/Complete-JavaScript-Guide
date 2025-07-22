console.clear();

/*

=====================================================================

        Beginner-Level JS Interview Questions using Functions 🔥

=====================================================================

*/

// 1️⃣ Greet Function – Welcome Message

function greet(name) {

    console.log("Hello " + name + ", Welcome to the Thapa Technical JavaScript Course");
}

greet("Vinod"); // Hello Vinod, Welcome to the Thapa Technical JavaScript Course

greet("Ram");   // Hello Ram, Welcome to the Thapa Technical JavaScript Course

// 2️⃣ Calculator Function using Switch Case

function calculator(num1, num2, operator) {

    let result;

    switch (operator) {

        // Case for addition

        case "+":

            result = num1 + num2;

            console.log("Addition: " + result);

            break;

        // Case for subtraction

        case "-":

            result = num1 - num2;

            console.log("Subtraction: " + result);

            break;

        // Case for multiplication

        case "*":

            result = num1 * num2;

            console.log("Multiplication: " + result);

            break;

        // Case for division

        case "/":

            result = num1 / num2;

            console.log("Division: " + result);

            break;

        // Case for modulus

        case "%":

            result = num1 % num2;

            console.log("Modulus: " + result);

            break;

        // Default case

        default:

            console.log("Invalid operator");
    }
}

calculator(10, 5, "+");

calculator(10, 5, "*");

// 3️⃣ Reverse a Number

function reverseNumber(num) {

    let reversed = 0;

    while (num > 0) {

        let lastDigit = num % 10;        // Get the last digit

        reversed = reversed * 10 + lastDigit; // Append to reversed

        num = Math.floor(num / 10);      // Remove last digit
    }

    return reversed;
}

console.log("Reversed number:", reverseNumber(1234)); // Output: 4321

// 4️⃣ Check if a Number is Palindrome

function isPalindromeNumber(num) {

    let original = num;

    let reversed = 0;

    while (num > 0) {

        let lastDigit = num % 10;

        reversed = reversed * 10 + lastDigit;

        num = Math.floor(num / 10);
    }

    if (original === reversed) {

        console.log(original + " is a Palindrome number");
    }

    else {

        console.log(original + " is NOT a Palindrome number");
    }
}

isPalindromeNumber(121);   // Palindrome

isPalindromeNumber(123);   // Not Palindrome

// 5️⃣ Check Even or Odd

function checkEvenOdd(num) {

    // If number is divisible by 2 then it is even

    if (num % 2 === 0) {

        console.log(num + " is an Even number");
    }

    else {

        console.log(num + " is an Odd number");
    }
}

checkEvenOdd(10); // Even

checkEvenOdd(9);  // Odd

// 6️⃣ Greater of Two Numbers

function findGreater(a, b) {

    if (a > b) {

        console.log(a + " is greater");
    }

    else if (b > a) {

        console.log(b + " is greater");
    }

    else {

        console.log("Both numbers are equal");
    }
}

findGreater(20, 10); // 20 is greater

findGreater(15, 15); // Both numbers are equal

// 7️⃣ Greatest of Three Numbers

function findGreatest(a, b, c) {

    // If a is greater than b and c then a is the greatest

    if (a >= b && a >= c) {

        console.log(a + " is the greatest");
    }

    // If b is greater than a and c then b is the greatest

    else if (b >= a && b >= c) {

        console.log(b + " is the greatest");
    }

    // Else c is the greatest

    else {

        console.log(c + " is the greatest");
    }
}

findGreatest(10, 20, 5); // 20 is the greatest

findGreatest(30, 30, 10); // 30 is the greatest

// 8️⃣ Count Number of Digits

function countDigits(num) {

    let count = 0;

    while (num > 0) {

        num = Math.floor(num / 10); // Remove last digit

        count++;                    // Increment counter
    }

    return count;
}

console.log("Total digits:", countDigits(12345)); // Output: 5

// 9️⃣ Check Prime Number

function isPrime(n) {

    // If number is less than or equal to 1 then it is not prime

    if (n <= 1) {

        console.log(n + " is not a prime number");

        return;
    }

    let isPrimeFlag = true;

    // If number is divisible by any number between 2 and n-1 then it is not prime

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {

            isPrimeFlag = false;

            break;
        }
    }

    if (isPrimeFlag) {

        console.log(n + " is a Prime number");

    } 
    
    else {

        console.log(n + " is NOT a Prime number");
    }
}

isPrime(7);  // Prime

isPrime(10); // Not Prime

// 🔟 Sum of First N Natural Numbers

function sumOfN(n) {

    let sum = 0;

    // Add all numbers from 1 to n

    for (let i = 1; i <= n; i++) {

        sum = sum + i;
    }

    return sum;
}

console.log("Sum of first 10 natural numbers:", sumOfN(10)); // Output: 55
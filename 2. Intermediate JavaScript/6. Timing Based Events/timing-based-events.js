// Selecting the DOM element that displays the remaining time

const timeElement = document.getElementById("time");

// Selecting the DOM element where the result (correct/incorrect/time's up) will be shown

const resultElement = document.getElementById("result");

// Selecting the submit button element

const submitButton = document.getElementById("submitBtn");

// Selecting the input box where user types the answer

const answerInput = document.getElementById("answer");

// Initial time (in seconds) for the quiz timer

let timeLeft = 10;

// Will store the setInterval ID so we can clear it later

let timeInterval;

// Will store the setTimeout ID so we can cancel the auto-fail message if needed

let timeoutId;

/*

===================================

⏱ Start the Countdown Timer

===================================

This function uses setInterval to decrease the timer every second. Once time reaches 0, it clears the interval to stop the countdown.

*/

const startTimer = () => {
    
    timeInterval = setInterval(() => {

        timeLeft--;                            // Decrease time by 1 second

        timeElement.textContent = timeLeft;   // Update the UI with the new time

        if (timeLeft === 0) {

            clearInterval(timeInterval);        // Stop the countdown when time is up
        }

    }, 1000); // Runs every 1000 milliseconds (1 second)
}

/*

=========================================

⚠️ Show Auto-Fail Message after 10 seconds

=========================================

This function uses setTimeout to show a message if the user doesn't submit an answer within the allotted time. It also disables the submit button and input box.

*/

const showAutoFailMessage = () => {

    timeoutId = setTimeout(() => {

        resultElement.textContent = "⏱ Time's up! You didn't answer in the allotted time.";

        submitButton.disabled = true;     // Prevent further submissions

        answerInput.disabled = true;      // Disable input after timeout

    }, 10000); // Executes after 10,000 milliseconds (10 seconds)
}

/*

===============================

✅ Submit Button Event Handler

===============================

Triggered when the user clicks the "Submit" button. It checks the answer, stops the countdown and cancels the auto-fail message timeout.

*/

submitButton.addEventListener("click", () => {

    const answer = answerInput.value.trim().toLowerCase(); // Get user's input, clean it, and make it lowercase

    clearInterval(timeInterval); // Stop the countdown (setInterval)

    clearTimeout(timeoutId);     // Cancel the auto-fail timeout

    if (answer === "paris") {

        // Correct answer case

        resultElement.textContent = "🎉 Correct! The capital of France is Paris.";

    } else if (answer === "") {

        // If input is empty

        resultElement.textContent = "⚠️ Please enter an answer.";

    } else {

        // Incorrect answer case

        resultElement.textContent = "❌ Incorrect! The capital of France is Paris.";
    }

    // Disable further interaction after submission

    submitButton.disabled = true;

    answerInput.disabled = true;
});

// 🔁 Start both the timer and the auto-fail countdown as soon as the page loads

startTimer();

showAutoFailMessage();
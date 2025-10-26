console.clear();

function throttleWithQueue(fn, delay) {

    let queue = [];        // Stores pending function calls

    let isRunning = false; // Indicates if queue is being processed

    // Handles sending messages one by one

    function processQueue() {

        if (queue.length === 0) { // Stop when no messages left

            isRunning = false;

            return;
        }

        const args = queue.shift(); // Take first message

        fn(...args);                // Execute it

        // Schedule next message after the delay

        setTimeout(processQueue, delay);
    }

    // Function that user actually calls

    return function (...args) {

        queue.push(args); // Add message to queue

        if (!isRunning) {

            // Start processing if not already

            isRunning = true;

            processQueue();
        }
    };
}

// Example function (sending a chat message)

const sendChatMessage = (message) => {

    console.log("Sending message:", message, "at", new Date().toLocaleTimeString());
};

// Create throttled version (10s delay between messages)

const sendMessageWithSlowMode = throttleWithQueue(sendChatMessage, 10000);

// Send some messages

sendMessageWithSlowMode("Hello");

sendMessageWithSlowMode("How are you?");

sendMessageWithSlowMode("Let's chat!");
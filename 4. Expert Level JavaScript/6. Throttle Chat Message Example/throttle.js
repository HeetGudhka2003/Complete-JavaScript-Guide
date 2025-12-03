console.clear();

/*

-----------------------------------------------------------

  THROTTLE FUNCTION (with leading + trailing behavior)

-----------------------------------------------------------

  PURPOSE:

  --------
  
  Ensures that a function runs at most once every `delay` ms.

  Behavior:

  ---------

  ✔ First call → runs immediately (leading)

  ✔ If more calls happen before delay finishes → store only the LAST one

  ✔ After the delay → run the stored call (trailing)

*/

const throttle = (fn, delay) => {

    // Timestamp of the last executed call

    let lastCall = 0;

    // Holds the timeout ID for the trailing call

    let timeoutId = null;

    // Stores the arguments of the most recent call (to run later)

    let lastArgs = null;

    // Return the throttled wrapper function

    return function (...args) {

        // Get the current time in ms

        const now = Date.now();

        /*

        -----------------------------------------------------------

          CASE 1: TOO SOON TO RUN (within delay period)

        -----------------------------------------------------------

          If the time difference is less than delay, we do NOT execute fn immediately.

        -----------------------------------------------------------

        */

        if (now - lastCall < delay) {

            // Save the latest arguments (only last call matters)

            lastArgs = args;

            // If a trailing timeout is NOT already scheduled:

            if (!timeoutId) {

                // Calculate how much time is left before we can run again

                const remaining = delay - (now - lastCall);

                // Schedule a trailing execution

                timeoutId = setTimeout(() => {

                    fn(...lastArgs);        // Run the last skipped call
                    
                    lastCall = Date.now();  // Update last execution time

                    timeoutId = null;       // Timeout finished → reset

                    lastArgs = null;        // Clear stored arguments

                }, remaining);
            }

            return; // Exit — do not execute fn now
        }

        /*

        -----------------------------------------------------------

          CASE 2: ENOUGH TIME HAS PASSED → RUN IMMEDIATELY

        -----------------------------------------------------------

        */

        lastCall = now;  // Update last time function was run

        fn(...args);     // Execute the function immediately
    };
};

/*

-----------------------------------------------------------

  CHAT MESSAGE FUNCTION

-----------------------------------------------------------

  Just prints:

  - message text

  - current date & time (human readable)

-----------------------------------------------------------

*/

const sendChatMessage = (message) => {

    console.log("Sending Message:", message, "at", new Date().toLocaleString());
};

// Wrap sendChatMessage inside a throttle

const sendChatMessageWithSlowMessage = throttle(sendChatMessage, 2000);

/*

-----------------------------------------------------------

  TEST CALLS

-----------------------------------------------------------

These 3 calls happen almost instantly (no delay between them)

  Expected Output:

  ----------------

  ✔ First call → runs immediately

  ✔ Next calls → ignored but LAST one runs after 2 seconds

-----------------------------------------------------------

*/

sendChatMessageWithSlowMessage("Hello");

sendChatMessageWithSlowMessage("Hello");

sendChatMessageWithSlowMessage("Hello");
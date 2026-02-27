/*
2. Timeout Iterator Function:

Write a function that accepts:
• An iterator (e.g., from the generator above)
• A timeout duration (in seconds)

It should continuously consume the iterator processing each value until the timeout has elapsed.

Ideas for the Processing Task:
• Print each value.
• If the iterator yields numbers and prints the total/avg on each iteration
• For colours, print the current date and iteration in a specified colour
*/

function stringRandomIterable(length, characters) {
  if (typeof characters === "undefined") {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~";
  } else {
    characters = characters.toString();
  }

  let count = 0;

  return {
    next() {
      if (count < length) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        count++;

        return { value: char, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

/**
 * @param {number} timeout Time in seconds for the timeout.
 * @param {[Symbol.iterator]} iterator An iterable function.
 * @param {number} intervalMs Time in milliseconds between each iteration tick.
 * @returns Function output.
 */

function iteratorTimeout(iterator, timeout, intervalMs) {
  const timeoutMs = timeout * 1000;
  const start = Date.now();
  const now = () => Date.now();

  const timer = setInterval(timerHandler, intervalMs);

  function timerHandler() {
    const elapsed = now() - start;
    const iteration = iterator.next();
    if (iteration.done || elapsed >= timeoutMs) {
      console.log("Finished or timed out");
      clearInterval(timer);
      return;
    }

    console.log(`${elapsed}ms: ${iteration.value}`);
  }
}

// iteratorTimeout(stringRandomIterable(10, "[object Object]"), 10, 10);

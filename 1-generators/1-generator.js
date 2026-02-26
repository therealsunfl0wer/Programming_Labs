/*
1. Generator Function:

Write a generator function that produces an infinite stream of values. The values should be generated 
based on one of the following options:

Options for the Generator Function:
• Random Number Generator - Continuously yield random integers or floats.
• Round Robin Generator - Iterate over a given list (e.g., ["A", "B", "C"]) in a loop indefinitely.
• Fibonacci Sequence Generator - Yield the next number in the Fibonacci sequence endlessly.
• Cyclic Date Generator - Cycle through the days of the week 
 ("Monday" -> "Tuesday" -> ... -> "Sunday" -> "Monday" -> ...).
• Incremental Counter Generator - Yield an ever-increasing number starting from a given start value.
• Random String Generator - Yield random strings of fixed or random length.
• Color Cycle Generator - Continuously cycle through a predefined list of colors (e.g., "red" -> "green" -> "blue").
*/

function* stringRandom(length, characters) {
  if (typeof characters === "undefined") {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~";
  } else {
    characters = characters.toString();
  }
  let output = "";
  let done = false;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    output += characters[index];
    yield { output: output, done: done };
  }
  done = true;
  return { output: output, done: done };
}

const gen = stringRandom(10);

for (let i = 0; i <= 10; i++) {
  console.log(gen.next().value);
}

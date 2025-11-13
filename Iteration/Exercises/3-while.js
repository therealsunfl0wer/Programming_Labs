"use strict";

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

module.exports = { sum };

"use strict";

const sum = (...args) => {
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let total = 0;
  for (const i of args) {
    total += i;
  }
  return total;
};

module.exports = { sum };

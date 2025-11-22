"use strict";

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const arr = [];
  for (const i of array) {
    if (!arr.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports = { unique };

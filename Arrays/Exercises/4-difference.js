"use strict";

// Find difference of two arrays
// elements from array1 that are not included in array2

const difference = (array1, array2) => {
  const arr = [];
  for (const i of array1) {
    if (!array2.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports = { difference };

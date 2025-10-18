'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start = 15, end = 30) => {
  const arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
};

module.exports = [range];

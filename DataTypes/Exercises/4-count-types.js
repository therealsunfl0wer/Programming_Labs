"use strict";

const array = [true, "hello", 5, 12, -200, false, false, "word"];

const countTypesInArray = () => {
  const counter = {};

  for (const element of array) {
    const type = typeof element;
    const value = counter[type] || 0;
    counter[type] = value + 1;
  }

  return counter;
};

console.dir(countTypesInArray(array));

module.exports = { countTypesInArray };

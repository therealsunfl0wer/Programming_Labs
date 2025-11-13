"use strict";
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  let seed = "";
  for (let i = 0; i < length; i++) {
    seed += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return seed;
};

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

module.exports = { generateKey };

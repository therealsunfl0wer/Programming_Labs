"use strict";

// a function that returns a function that returns a value
// or in simpler words, a closure
const store = (val) => () => val;

module.exports = { store };

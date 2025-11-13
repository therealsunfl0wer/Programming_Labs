"use strict";

const a = 5;

const inc = (i) => ++i;

const b = inc(a);
console.dir({ a, b });

module.exports = { inc, b };

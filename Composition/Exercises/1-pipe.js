"use strict";

const pipe = (...fns) => {
  for (const i of fns) {
    if (typeof i !== "function") {
      throw new Error("One of arguments is not a function.");
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };

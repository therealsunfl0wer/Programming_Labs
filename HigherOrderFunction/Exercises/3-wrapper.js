"use strict";

const contract =
  (fn, ...types) =>
  (...args) => {
    const argTypes = types.slice(0, types.length - 1);
    const resultType = types[types.length - 1];

    if (args.length !== argTypes.length) {
      throw new TypeError(`Arg count error: Expected ${argTypes.length}`);
    }

    const check = (val, def, isArg) => {
      const isPrim = (t, v) =>
        (t === Number && typeof v === "number") ||
        (t === String && typeof v === "string") ||
        (t === Boolean && typeof v === "boolean");

      if (!isPrim(def, val) && !(val instanceof def)) {
        throw new TypeError(
          `${isArg ? "Argument" : "Result"} type error: Expected ${def.name}`
        );
      }
    };

    for (let i = 0; i < args.length; i++) {
      check(args[i], argTypes[i], true);
    }

    const res = fn(...args);
    check(res, resultType, false);
    return res;
  };

/* const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings("Hello ", "world!");
console.dir(res); // Output: Hello world! 
*/

module.exports = { contract };

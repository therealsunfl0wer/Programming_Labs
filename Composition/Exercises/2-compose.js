"use strict";

const compose = (...fns) => {
  const handlers = [];
  const composed = function (...args) {
    let result = undefined;

    try {
      result = fns.reduceRight((currentValue, fn, index) => {
        let nextValue;

        if (index === fns.length - 1) {
          nextValue = fn(...currentValue);
        } else {
          if (currentValue === undefined) {
            return undefined;
          }
          nextValue = fn(currentValue);
        }

        return nextValue;
      }, args);
    } catch (e) {
      result = undefined;

      for (const handler of handlers) {
        handler(e);
      }
    }

    return result;
  };

  composed.on = (name, handler) => {
    if (name === "error" && typeof handler === "function") {
      handlers.push(handler);
    }
    return composed;
  };

  return composed;
};

module.exports = { compose };

"use strict";

const removeElements = (array, ...items) => {
  // Remove multiple items from array modifying original array
  for (const item of items) {
    const i = array.indexOf(item);
    if (i !== -1) array.splice(i, 1);
  }
};

module.exports = { removeElements };

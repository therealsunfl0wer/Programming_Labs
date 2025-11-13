"use strict";

const array = () => {
  const arr = [];
  const access = (i) => arr[i];
  access.push = (i) => arr.push(i);
  access.pop = () => arr.pop();
  return access;
};

module.exports = { array };

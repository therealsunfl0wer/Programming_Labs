'use strict';

const obj = { n: 5 };

const inc = () => {
  obj.n++;
};

inc(obj.n);
console.dir(obj);

module.exports = { inc, obj };

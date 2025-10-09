/* eslint-disable no-use-before-define */
/* eslint-disable no-var */
'use strict';

console.log(fn);
var fn = 4;
console.log(fn);

module.exports = { fn };

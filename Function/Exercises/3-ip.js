"use strict";

const ipToInt = (ip) => {
  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  // and convert to Number value 167772161 with bitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  // Use Array.prototype.reduce of for loop
  let o = 0;

  const ipArray = ip.split(".").map(Number);
  for (let i = 0; i < ipArray.length; i++) {
    o += ipArray[i] << ((3 - i) * 8);
  }
  return o;
};

// console.log(ipToInt('10.0.0.1'));

module.exports = { ipToInt };

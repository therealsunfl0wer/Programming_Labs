// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start = 15, end = 30) => {
  const arr = [];

  const counter = () => {
    while (start <= end) {
      arr.push(start);
      start += 2;
    }
  };

  if (start % 2 === 0) counter(++start);
  else counter();
  return arr;
};
console.log(rangeOdd());
module.exports = { rangeOdd };

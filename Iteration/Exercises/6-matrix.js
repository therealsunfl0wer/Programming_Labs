"use strict";

const max = (matrix) => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
  let val = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > val) val = matrix[i][j];
    }
  }
  return val;
};

module.exports = { max };

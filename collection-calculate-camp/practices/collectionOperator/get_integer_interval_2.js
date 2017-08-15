'use strict';

function get_integer_interval(number_a, number_b) {
  const resultArray = getResultArray(number_a, number_b);

  return resultArray;
}

function getResultArray(number_a,number_b) {
  const resultArray = [];

  if (number_a - number_b > 0) {
    for (var i = number_a; i >= number_b; i--) {
      if (i % 2 === 0) {
        resultArray.push(i);
      }
    }
  }

  if (number_b - number_a > 0) {
    for (var  j= number_a; j <= number_b; j++) {
      if (j % 2 === 0) {
        resultArray.push(j);
      }
    }
  }

  if (number_a === number_b && number_a % 2 === 0) {
    resultArray.push(number_a)
  }

  return resultArray;
}

module.exports = get_integer_interval;


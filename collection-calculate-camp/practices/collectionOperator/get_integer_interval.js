'use strict';

function get_integer_interval(number_a, number_b) {
  const resultArray = getResultArray(number_a, number_b);

  return resultArray;
}

function getResultArray(number_a, number_b) {
  const resultArray = [];

  if (number_a - number_b > 0) {
    for (var i = number_a; i >= number_b; i--) {
      resultArray.push(i);
    }
  }

  if (number_a - number_b <= 0) {
    for (var j = number_a; j <= number_b; j++) {
      resultArray.push(j);
    }
  }

  return resultArray;
}


module.exports = get_integer_interval;


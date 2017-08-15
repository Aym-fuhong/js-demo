'use strict';

function get_letter_interval(number_a, number_b) {
  const resultArray = [];

  if (number_a - number_b > 0) {
    for (var i = number_a; i >= number_b; i--) {
      resultArray.push(String.fromCharCode(i + 96));
    }
  }

  if (number_a - number_b <= 0) {
    for (var j = number_a; j <= number_b; j++) {
      resultArray.push(String.fromCharCode(j + 96));
    }
  }

  return resultArray;
}

module.exports = get_letter_interval;

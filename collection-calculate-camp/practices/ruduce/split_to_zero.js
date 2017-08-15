'use strict';

function spilt_to_zero(number, interval) {

  let resultArray = [];

  for (var i = number; i >= 0; i = i - interval) {

    resultArray.push(parseFloat(i.toFixed(1)));
  }

  const element = resultArray[resultArray.length - 1];

  if (element !== 0) {
    resultArray.push(parseFloat((element - interval).toFixed(1)));
  }

  return resultArray;
}

module.exports = spilt_to_zero;

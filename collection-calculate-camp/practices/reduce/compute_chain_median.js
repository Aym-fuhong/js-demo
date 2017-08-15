'use strict';

function compute_chain_median(collection) {
  const resultArray = collection.split('->');

  for (var i in resultArray) {
    resultArray[i] = parseInt(resultArray[i]);
  }
  resultArray.sort((a, b) => a - b);

  return (resultArray[resultArray.length /2] + resultArray[resultArray.length / 2 - 1]) / 2;
}

module.exports = compute_chain_median;

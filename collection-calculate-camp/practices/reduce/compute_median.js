'use strict';

function compute_median(collection) {

  const resultArray = collection.sort((a, b)=> a - b);

  return (resultArray.length % 2 === 0 ) ? (resultArray[resultArray.length / 2] + resultArray[resultArray.length / 2 - 1]) / 2 :
      (resultArray[Math.floor(resultArray.length / 2)]);
}

module.exports = compute_median;





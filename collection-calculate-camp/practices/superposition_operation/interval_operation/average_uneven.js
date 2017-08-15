'use strict';

function average_uneven(collection) {
  const resultArray = collection.filter(item => item % 2 !== 0);

  return resultArray.reduce((a, b)=> a + b) / resultArray.length;
}

module.exports = average_uneven;

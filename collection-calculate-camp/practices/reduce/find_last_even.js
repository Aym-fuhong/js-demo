'use strict';

function find_last_even(collection) {
  const newArray = collection.filter(item => item % 2 === 0);

  return newArray[newArray.length - 1];

}

module.exports = find_last_even;

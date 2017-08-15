'use strict';
function one_add_next_multiply_three(collection) {
  const resultArray = [];

  for (var i = 0; i < collection.length - 1; i++) {
    resultArray.push((collection[i] + collection[i + 1]) * 3);
  }

  return resultArray;
}
module.exports = one_add_next_multiply_three;

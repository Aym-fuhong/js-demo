'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((a, b) => a + b);
}

module.exports = calculate_elements_sum;


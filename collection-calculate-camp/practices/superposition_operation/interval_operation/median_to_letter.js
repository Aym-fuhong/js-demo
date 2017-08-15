'use strict';

function median_to_letter(collection) {
  const result = Math.ceil(collection[collection.length / 2]);

  return `${String.fromCharCode(result / 26 + 96)}${String.fromCharCode(result % 26 + 96)}`;
}

module.exports = median_to_letter;

'use strict';
var number_map_to_word_over_26 = function (collection) {

  return collection.map(item => {
    if (item <= 26) {
      return String.fromCharCode(item + 96);
    } else {
      return `${String.fromCharCode(item / 26 + 96)}${String.fromCharCode(item % 26 + 96)}`;
    }
  })
};

module.exports = number_map_to_word_over_26;

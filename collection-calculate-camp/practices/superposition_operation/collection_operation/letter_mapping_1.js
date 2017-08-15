'use strict';

function even_to_letter(collection) {
  return collection.filter(item => item % 2 === 0).map(item => String.fromCharCode(item + 96));
}

module.exports = even_to_letter;

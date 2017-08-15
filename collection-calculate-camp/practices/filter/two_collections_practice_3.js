'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(item => collection_b.find(element => item % element === 0));
}

module.exports = choose_divisible_integer;

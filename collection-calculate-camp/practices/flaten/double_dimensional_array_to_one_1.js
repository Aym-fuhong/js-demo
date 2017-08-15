'use strict';

function double_to_one(collection) {

  return collection.reduce((a, b) => a.concat(b));
}

module.exports = double_to_one;

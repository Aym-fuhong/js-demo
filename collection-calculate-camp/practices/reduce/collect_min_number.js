'use strict';

function collect_min_number(collection) {
  return collection.reduce((a, b)=> Math.min(a, b));
}

module.exports = collect_min_number;


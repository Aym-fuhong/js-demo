'use strict';

function collect_max_number(collection) {
  return collection.reduce((a, b)=> Math.max(a, b));
}

module.exports = collect_max_number;

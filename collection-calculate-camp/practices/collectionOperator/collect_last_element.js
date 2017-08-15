'use strict';

function collect_last_element(collection) {
  return collection.find(item => collection.indexOf(item) === collection.length - 1);
}

module.exports = collect_last_element;

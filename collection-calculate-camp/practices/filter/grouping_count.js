'use strict';

function grouping_count(collection) {
  const newCollection = collection.sort();
  const result = {};

  for (var i in newCollection) {
    if (newCollection[i] !== newCollection[i + 1]) {
      result[newCollection[i]] = (newCollection.filter(item => item === newCollection[i])).length
    }
  }

  return result;
}

module.exports = grouping_count;

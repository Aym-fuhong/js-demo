'use strict';

function get_intersection(collection_a, collection_b) {
  const resultArray = [];

  collection_b.forEach(item => {
    if (collection_a.find(element => element === item)) {
      resultArray.push(item);
    }
  });

  return resultArray;
}

module.exports = get_intersection;

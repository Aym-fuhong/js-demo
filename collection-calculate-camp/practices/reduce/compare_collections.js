'use strict';

function compare_collections(collection_a, collection_b) {
  collection_a.forEach(item => {
    const location = collection_a.indexOf(item);
    if (!collection_b.find(element => element === item && collection_b.indexOf(element) === location)) {
      return false;
    }
  });

  return true;
}

module.exports = compare_collections;



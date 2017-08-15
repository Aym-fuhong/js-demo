'use strict';
function rank_by_two_large_one_small(collection) {
  const newArray = collection.sort((a, b)=> a - b);

  for (var i = 0; i < newArray.length - 3; i = i + 3) {
    let item = newArray[i + 1];
    let element = newArray[i + 2];

    newArray[i + 2] = newArray[i];
    newArray[i + 1] = element;
    newArray[i] = item;
  }

  return newArray;
}
module.exports = rank_by_two_large_one_small;

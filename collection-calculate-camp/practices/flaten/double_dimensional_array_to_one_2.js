'use strict';

function double_to_one(collection) {

  const resultArray = [];

  collection.reduce((a, b) => a.concat(b)).forEach(item => {
    if (!resultArray.find(element => item === element)) {
      resultArray.push(item);
    }
  });

  return resultArray;
}

module.exports = double_to_one;

'use strict';

function choose_no_repeat_number(collection) {
  const resultArray = [];

  collection.forEach(item => {

    if (!resultArray.find(element => element === item)) {
      resultArray.push(item);
    }
  });

  return resultArray;
}

module.exports = choose_no_repeat_number;

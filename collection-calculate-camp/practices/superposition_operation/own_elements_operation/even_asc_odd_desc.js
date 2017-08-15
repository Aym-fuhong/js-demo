'use strict';
var even_asc_odd_desc = function (collection) {
  const oddArray = collection.filter(item => item % 2 !== 0).sort((a, b)=> b - a);
  const evenArray = collection.filter(item => item % 2 === 0).sort((a, b)=> a - b);

  return evenArray.concat(oddArray);

};
module.exports = even_asc_odd_desc;

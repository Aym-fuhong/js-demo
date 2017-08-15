'use strict';

function get_union(collection_a, collection_b) {
  const resultArray = collection_a;

  collection_b.forEach(item =>{
    if(collection_a.includes(item) === false){
      resultArray.push(item);
    }
  }) ;

  return resultArray;
}

module.exports = get_union;


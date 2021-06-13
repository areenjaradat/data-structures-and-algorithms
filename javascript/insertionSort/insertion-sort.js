'use strict';

function insertionSort(array){

  for(let i = 0; i < array.length - 1; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      if (array[j] < array[min]){
        min = j;
      }

    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
  return array;
}

module.exports = insertionSort;

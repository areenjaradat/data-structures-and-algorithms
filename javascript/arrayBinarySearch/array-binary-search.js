'use strict';

module.exports= function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {

    console.log('start',start);
    console.log('end',end);
    // console.log("count")
    middle = Math.ceil((start + end)/2);
    console.log('middle',middle);
    // console.log(mid)
    if (arr[middle] === n) {
      return middle;
    } else if (arr[middle] < n) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};


'use strict';

function quickSort(arr, left, right) {
  if (left < right) {

    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);

    quickSort(arr, position + 1, right);
  }
  return arr;
}
function partition(arr, left, right) {

  let pivot = arr[right];

  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }

  }

  swap(arr, right, low + 1);

  return low + 1;
}
function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
// let arr = [8, 4, 23, 12, 10, 42, 16, 15];
// console.log(quickSort(arr, 0, 7));
module.exports=quickSort;

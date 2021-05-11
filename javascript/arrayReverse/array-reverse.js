'use strict';

module.exports =function reverseArray(arr){
  let newArr=[];
  for(let i=arr.length-1;i>=0;i--){
    newArr.push(arr[i]);
  }
  return newArr;
};


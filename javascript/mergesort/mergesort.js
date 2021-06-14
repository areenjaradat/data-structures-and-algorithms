'use strict';

function mergesort(arr){
  let n =arr.length;

  if(n>1){
    let mid=Math.floor(n/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    //console.log('mid',mid);
    mergesort(left);
    //console.log('left in left',left);
    mergesort(right);
    //console.log('right in right',right);
    merge(left,right,arr);
    //console.log('arr',arr);
  }
  return arr;
}

function merge(left,right,arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i<left.length && j<right.length){
    if(left[i]<=right[j]){
      //console.log('left',left[i]);
      arr[k]=left[i];
      i++;
    }else{
      //console.log('right',right[j]);
      arr[k]=right[j];
      j++;
    }
    k++;
  }
  if(i===left.length){

    while (j < right.length) {
      arr[k] = right[j];
      k=k+1;
      j=j+1;
    }
  }else{

    while (i < left.length) {
      arr[k] = left[i];
      k=k+1;
      i=i+1;
    }
  }
}
module.exports = mergesort;


//console.log(mergesort([4,4,23,42,16,15,1]));

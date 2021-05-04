'use strict';

const arrayBinarySearch=require('../array-binary-search');

describe('arrayBinarySearch',()=>{
  it('return index of array if exist',()=>{
    expect(arrayBinarySearch([1,2,3,4,5,6],4)).toEqual(3);
    expect(arrayBinarySearch([1,2,3,4,5,6],7)).toEqual(-1);
    expect(arrayBinarySearch([],7)).toEqual(-1);
  });
});

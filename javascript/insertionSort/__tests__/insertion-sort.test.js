'use strict';

const insertionSort = require('../insertion-sort');

describe('Testing insertion-sort', () => {
  it('should sort an array', () => {
    let arr=[8,4,23,42,16,15];
    expect(insertionSort(arr)).toStrictEqual([4,8,15,16,23,42]);
  });
  it('should sort reverse-sorted array', () => {
    let arr=[20,18,12,8,5,-2];
    expect(insertionSort(arr)).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array ', () => {
    let arr=[3,12,7,3,3,7];
    expect(insertionSort(arr)).toStrictEqual([3,3,3,7,7,12]);
  });
  it('should sort an array', () => {
    let arr=[1,3,5,7,13,11];
    expect(insertionSort(arr)).toStrictEqual([1,3,5,7,11,13]);
  });
});

'use strict';

let shift=require('../array-shift');

describe('test shift array',()=>{
  it('results',()=>{
    expect(shift([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
    expect(shift([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    expect(shift([], 16)).toEqual([]);
  });
});

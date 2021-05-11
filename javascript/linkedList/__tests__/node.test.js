'use strict';

let Node=require('../node');

describe('testing node ',()=>{
  it('test constructor',()=>{
    let value=55;
    let node =new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});

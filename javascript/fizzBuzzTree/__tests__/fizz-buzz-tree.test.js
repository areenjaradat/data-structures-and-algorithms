'use strict';


const {fizzBuzzTree,Tree}=require('../fizz-buzz-tree');
describe('test tree',()=>{

  let kary;
  beforeAll(()=> {

    kary = new Tree();
    kary.addNode(15);
    kary.addNode(5);
    kary.addNode(20);
    kary.addNode(6);
    kary.addNode(3);
    kary.addNode(1);
    console.log(kary);
  });
  it(' Can successfully fizz-buzz tree',()=>{

    expect(fizzBuzzTree(kary).root.value).toEqual('FizzBuzz');
    expect(fizzBuzzTree(kary).children[0].value).toEqual('Buzz');
    expect(fizzBuzzTree(kary).children[1].value).toEqual('Buzz');
    expect(fizzBuzzTree(kary).children[2].value).toEqual('Fizz');
    expect(fizzBuzzTree(kary).children[3].value).toEqual('Fizz');
    expect(fizzBuzzTree(kary).children[4].value).toEqual('1');
  });
});

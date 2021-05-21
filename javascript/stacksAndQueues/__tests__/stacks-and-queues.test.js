'use strict';

const {Stack,Queue}=require('../stacks-and-queues');

describe('test stack ',()=>{
  it('1. push into stack',()=>{
    let stack=new Stack();
    let num=1;
    stack.push(num);
    expect(stack.storage[0]).toEqual(1);
    expect(stack.top).toEqual(1);
  });

  it('2. push multible into stack',()=>{
    let stack=new Stack();
    let num=1;
    let num1=2;
    let num2=3;
    stack.push(num);
    stack.push(num1);
    stack.push(num2);
    expect(stack.storage[0]).toEqual(3);
    expect(stack.top).toEqual(3);
  });
  it('3. pop  from stack',()=>{
    let stack=new Stack();
    let num=1;
    let num1=2;
    let num2=3;
    stack.push(num);
    stack.push(num1);
    stack.push(num2);
    let val=  stack.pop();
    expect(stack.storage[0]).toEqual(2);
    expect(stack.top).toEqual(2);
    expect(val).toEqual(3);
  });
  it('4. pop multible from stack',()=>{
    let stack=new Stack();
    let num=1;
    let num1=2;
    let num2=3;
    stack.push(num);
    stack.push(num1);
    stack.push(num2);
    let val=  stack.pop();
    let val2=  stack.pop();
    expect(stack.storage[0]).toEqual(1);
    expect(stack.top).toEqual(1);
    expect(val).toEqual(3);
    expect(val2).toEqual(2);
  });

  it('5. peek stack',()=>{
    let stack=new Stack();
    let num=1;
    let num1=2;
    let num2=3;
    stack.push(num);
    stack.push(num1);
    stack.push(num2);
    expect(stack.peek()).toEqual(3);
  });
  it('6. creates a stack', ()=> {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });
  it('7. pop empty a stack', ()=> {
    let stack = new Stack();
    expect(stack.pop()).toEqual('exception');
    expect(stack.isEmpty()).toBeTruthy();
  });
});

describe('test Queue ',()=>{
  it('8. push into Queue',()=>{
    let queue=new Queue();
    let num=1;
    queue.enqueue(num);
    expect(queue.storage[0]).toEqual(1);
    expect(queue.front).toEqual(1);
  });

  it('9. push multible into Queue',()=>{
    let queue=new Queue();
    let num=1;
    let num1=2;
    let num2=3;
    queue.enqueue(num);
    queue.enqueue(num1);
    queue.enqueue(num2);
    expect(queue.storage[0]).toEqual(1);
    expect(queue.front).toEqual(1);
  });
  it('10. pop  from Queue',()=>{
    let queue=new Queue();
    let num=1;
    let num1=2;
    let num2=3;
    queue.enqueue(num);
    queue.enqueue(num1);
    queue.enqueue(num2);
    let val=  queue.dequeue();
    expect(queue.storage[0]).toEqual(2);
    expect(queue.front).toEqual(2);
    expect(val).toEqual(1);
  });
  it('11. pop multible from Queue',()=>{
    let queue=new Queue();
    let num=1;
    let num1=2;
    let num2=3;
    queue.enqueue(num);
    queue.enqueue(num1);
    queue.enqueue(num2);
    let val=  queue.dequeue();
    let val2=  queue.dequeue();
    expect(queue.storage[0]).toEqual(3);
    expect(queue.front).toEqual(3);
    expect(val).toEqual(1);
    expect(val2).toEqual(2);
  });

  it('12. peek Queue',()=>{
    let queue=new Queue();
    let num=1;
    let num1=2;
    let num2=3;
    queue.enqueue(num);
    queue.enqueue(num1);
    queue.enqueue(num2);
    expect(queue.peek()).toEqual(1);
  });
  it('13. creates a Queue', ()=> {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });
  it('14. pop empty a Queue', ()=> {
    let queue = new Queue();
    expect(queue.dequeue()).toEqual('exception');
    expect(queue.isEmpty()).toBeTruthy();
  });
});

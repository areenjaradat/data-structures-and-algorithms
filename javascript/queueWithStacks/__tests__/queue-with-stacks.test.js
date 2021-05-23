'use strict';

let PseudoQueue=require('../queue-with-stacks');

describe('test PseudoQueue',()=>{
  it('added ',()=>{
    let queue=new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    let val=5;
    queue.enqueue(val);
    expect(queue.stack1.top).toEqual(5);
    expect(queue.stack1.storage[0]).toEqual(5);
  });

  it('dequeue ',()=>{
    let queue=new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);

    expect(queue.dequeue()).toEqual(20);
  });
});

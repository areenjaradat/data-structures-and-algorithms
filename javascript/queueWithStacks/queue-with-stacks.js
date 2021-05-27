'use strict';

let {Stack}=require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor(){
    this.stack1=new Stack();
    this.stack2=new Stack();
  }

  enqueue(value){
    return this.stack1.push(value);
  }

  dequeue(){
    // let tempStack=this.stack1;
    // console.log('tempStack',tempStack.storage);
    // console.log('tempStack',tempStack.top);
    while(this.stack1.storage.length>0){
      this.stack2.push(this.stack1.pop());
    }
    //console.log('Stack',this.stack1.storage);
    return this.stack2.pop();
  }
}

module.exports=PseudoQueue;

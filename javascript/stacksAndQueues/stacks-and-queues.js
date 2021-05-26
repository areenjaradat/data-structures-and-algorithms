'use strict';

const Node = require('../linkedList/node');

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  push(val){
    this.storage.unshift(val);
    this.top=val;
  }

  pop(){
    if(!this.top){
      return 'exception';
    }else{
      let item=this.storage.shift();
      this.top=this.storage[0];
      //console.log(this.top);
      return item;
    }
  }
  peek(){
    if(!this.top){
      return 'exception';
    }else{
      return this.top;
    }
  }
  isEmpty(){
    if(!this.top){
      return true;
    }
    return false;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.storage = [];
  }

  enqueue(val){
    this.storage.push(val);
    this.front=this.storage[0];
  }

  dequeue(){
    if(!this.storage.length){
      return 'exception';
    }else{
      let value=this.storage.shift();
      this.front=this.storage[0];
      return value;
    }
  }
  peek(){
    if(!this.front){
      return 'exception';
    }else{
      return this.front;
    }
  }
  isEmpty(){
    if(!this.top){
      return true;
    }
    return false;
  }
}

module.exports={
  Stack,Queue
};

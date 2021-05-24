'use strict';

let {Queue}=require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter{
  constructor(){
    this.cat=new Queue();
    this.dog=new Queue();
  }

  enqueue(type){
    if(type==='cat'){
      this.cat.enqueue(type);
    }else if(type==='dog'){
      this.dog.enqueue(type);
    }else{
      return 'wrong type it just cat or dog';
    }
  }

  dequeue(pref){
    if(pref==='cat'){
      return this.cat.dequeue();
    }else if(pref==='dog'){
      return this.dog.dequeue();
    }else{
      return null;
    }
  }
}
module.exports=AnimalShelter;

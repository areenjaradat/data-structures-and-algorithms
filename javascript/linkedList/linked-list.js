'use strict';

const Node=require('./node');

class LinkedList{
  constructor(){
    this.head=null;
  }

  append(value){
    let node=new Node(value);
    if(!this.head){
      this.head=node;
    }else{
      let currentNode=this.head;
      while(currentNode.next){
        currentNode=currentNode.next;
      }
      currentNode.next=node;
    }
    return this;
  }

  insert(value){
    let node=new Node(value);
    if(!this.head){
      this.head=node;
    }else{
      node.next=this.head;
      this.head=node;
    }
  }
  includes(value){
    let currentNode=this.head;
    if(this.head){
      while(currentNode.next){
        if(currentNode.value===value){
          return true;
        }
        currentNode=currentNode.next;
      }
    }

    return false;
  }
  toString(){
    let linkedListToString='';
    let currentNode=this.head;
    if(!this.head){
      linkedListToString='empty LinkedList';
    }else{

      while(currentNode.next){
        linkedListToString +=`{${currentNode.value}}->`;
        currentNode=currentNode.next;
      }
      linkedListToString +=`NULL`;
    }
    return linkedListToString;
  }

}

module.exports=LinkedList;

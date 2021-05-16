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


  insertBefore(value, newVal){
    let node=new Node(newVal);
    if(this.head){
      let currentNode=this.head;
      if(currentNode.value===value){
        node.next=currentNode;
        this.head=node;
        return 'success';
      }
      while(currentNode.next){
        if(currentNode.next.value===value){
          let tempNode=currentNode.next;
          currentNode.next=node;
          node.next=tempNode;
          return 'success';
        }
        currentNode=currentNode.next;
      }
    }
    return 'Exception';
  }


  insertAfter(value, newVal){
    let node=new Node(newVal);
    if(this.head){
      let currentNode=this.head;
      while(currentNode){
        if(currentNode.value===value){
          let tempNode=currentNode.next;
          currentNode.next=node;
          node.next=tempNode;
          return 'success';
        }
        currentNode=currentNode.next;
      }
    }
    return 'Exception';
  }

}

module.exports=LinkedList;
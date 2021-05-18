'use strict';

const Node=require('./node');

class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }

  append(value){
    let node=new Node(value);
    if(!this.head){
      this.head=node;
      this.size++;
    }else{
      let currentNode=this.head;
      while(currentNode.next){
        currentNode=currentNode.next;
      }
      currentNode.next=node;
      this.size++;
    }
    return this;
  }

  insert(value){
    let node=new Node(value);
    if(!this.head){
      this.head=node;
      this.size++;
    }else{
      node.next=this.head;
      this.head=node;
      this.size++;
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

      while(currentNode){
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
        this.size++;
        return 'success';
      }
      while(currentNode.next){
        if(currentNode.next.value===value){
          let tempNode=currentNode.next;
          currentNode.next=node;
          node.next=tempNode;
          this.size++;
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
          this.size++;
          node.next=tempNode;
          return 'success';
        }
        currentNode=currentNode.next;
      }
    }
    return 'Exception';
  }

  kthFromEnd(k){
    let currentNode=this.head;
    let count=this.size-1;
    while(currentNode){
      if(k===count){
        return currentNode.value;
      }
      count--;
      currentNode=currentNode.next;
    }
    return 'Exception';
  }

}

module.exports=LinkedList;

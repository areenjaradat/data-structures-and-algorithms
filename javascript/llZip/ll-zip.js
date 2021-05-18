'use strict';

const LinkedList=require('../linkedList/linked-list');

module.exports=function zipLists(list1, list2){

  let currentNode1=list1.head;
  let currentNode2=list2.head;

  let combinedLinkedList=new LinkedList();

  while(currentNode1 || currentNode2){
    if(currentNode1){
      combinedLinkedList.append(currentNode1.value);
      currentNode1=currentNode1.next;
    }

    if(currentNode2){
      combinedLinkedList.append(currentNode2.value);
      currentNode2=currentNode2.next;
    }
  }
  return combinedLinkedList;
};

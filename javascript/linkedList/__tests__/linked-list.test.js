'use strict';

const LinkedList=require('../linked-list');



describe('test Singly Linked Lists',()=>{
  let linkedList=new LinkedList();
  it('instantiate an empty linked list',()=>{
    expect(linkedList.head).toBeNull();
  });
  it('Can properly insert into the linked list',()=>{
    linkedList.insert(10);
    expect(linkedList.head.value).toEqual(10);
  });
  it('The head property will properly point to the first node in the linked list',()=>{
    expect(linkedList.head.value).toEqual(10);
  });
  it('Can properly insert multiple nodes into the linked list',()=>{
    linkedList.insert(11);
    linkedList.insert(12);
    expect(linkedList.head.value).toEqual(12);
    expect(linkedList.head.next.value).toEqual(11);
    expect(linkedList.head.next.next.value).toEqual(10);
  });
  it('Will return true when finding a value within the linked list that exists,false when searching for a value in the linked list that does not exist',()=>{
    expect(linkedList.includes(11)).toBeTruthy();
    expect(linkedList.includes(115)).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{12}->{11}->NULL');
    expect(newLinkedList.toString()).toEqual('empty LinkedList');
  });
  it('append()', ()=> {

    const value =  13;
    linkedList.append(value);
    expect(linkedList.head.next.next.next.value).toEqual(13);

  });
});

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

  it('append() multible', ()=> {

    const value =  14;
    linkedList.append(value);
    linkedList.append(15);
    expect(linkedList.head.next.next.next.next.value).toEqual(14);
    expect(linkedList.head.next.next.next.next.next.value).toEqual(15);

  });
  it('insert a node before the first node of a linked list', ()=> {
    linkedList.insertBefore(12, 20);
    expect(linkedList.head.value).toEqual(20);
    expect(linkedList.toString()).toEqual('{20}->{12}->{11}->{10}->{13}->{14}->NULL');

  });
  it('insert a node before a node located i the middle of a linked list', ()=> {
    linkedList.insertBefore(11, 9);
    expect(linkedList.toString()).toEqual('{20}->{12}->{9}->{11}->{10}->{13}->{14}->NULL');

  });
  it('insert after a node in the middle of the linked list', ()=> {
    linkedList.insertAfter(11, 7);
    expect(linkedList.toString()).toEqual('{20}->{12}->{9}->{11}->{7}->{10}->{13}->{14}->NULL');

  });
  it('insert a node after the last node of the linked list', ()=> {
    linkedList.insertAfter(14, 15);
    expect(linkedList.toString()).toEqual('{20}->{12}->{9}->{11}->{7}->{10}->{13}->{14}->{15}->NULL');

  });
});

'use strict';

const LinkedList=require('../../linkedList/linked-list');

const llZip=require('../ll-zip');

const list1=new LinkedList();

list1.append(10);
list1.append(20);
list1.append(30);

const list2=new LinkedList();

list2.append(40);
list2.append(50);
list2.append(60);


let combinedLinkedList=llZip(list1,list2);
const list3=new LinkedList();
describe('zipLists Testing',()=>{
  it('make sure lists are zipped correctly',()=>{
    expect(combinedLinkedList.toString()).toEqual('{10}->{40}->{20}->{50}->{30}->{60}->NULL');
    expect(llZip(list1,list3).toString()).toEqual('{10}->{20}->{30}->NULL');
    list2.append(100);
    combinedLinkedList=llZip(list1,list2);
    expect(combinedLinkedList.toString()).toEqual('{10}->{40}->{20}->{50}->{30}->{60}->{100}->NULL');
  });
});

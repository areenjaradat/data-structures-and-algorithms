'use strict';

const LinkedList=require('../linkedList/linked-list');

class HashTable{
  constructor(size){
    this.size=size;
    this.table=new Array(size);
  }

  hash(key) {
    const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
    //console.log('sum : ', sum);
    return (sum * 19) % this.size;
  }

  set(key, value) {
    const hashed = this.hash(key);
    //console.log(hashed);
    if (!this.table[hashed]) {
      this.table[hashed] = new LinkedList();
    }
    this.table[hashed].append({ [key] : value} );
  }

  contains(key){
    const hashed = this.hash(key);
    return this.table[hashed]?true:false;
  }
  get(key){
    const hashed = this.hash(key);
    if (this.contains(key)) {
      if (this.table[hashed].head) {
        let current = this.table[hashed].head;
        if (Object.keys(current.value)[0] === key) {
          return current.value[key];
        }
        while (current.next) {
          current = current.next;
          if (Object.keys(current.value)[0] === key){
            return current.value[key];
          }
        }
      }
    }
    return null;
  }
}
module.exports=HashTable;


// const myhashtable = new HashTable(1024);
// myhashtable.set('bucket', 'Ishaq');
// myhashtable.set('melon', 'water');
// myhashtable.set('lemon', 'not-water');
// myhashtable.set('abzy', 'musab1');
// myhashtable.set('cdxw', 'musab2');

// console.log(myhashtable.table);
// console.log(myhashtable.get('abzy'));
// console.log(myhashtable.contains('abzy'));

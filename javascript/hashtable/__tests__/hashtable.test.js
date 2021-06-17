'use strict';

const HashTable = require('../hashtable.js');

describe('Hash Table',()=>{
  it('can Successfully Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashtable = new HashTable(50);
    hashtable.set('firstName','areen');

    expect(hashtable.table[hashtable.hash('firstName')]).toBeDefined();
  });
  it('can Successfully Retrieving based on a key returns the value stored',()=>{
    let hashtable = new HashTable(50);
    hashtable.set('areen',1996);

    expect(hashtable.get('areen')).toEqual(1996);
  });
  it('can Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashtable = new HashTable(50);
    hashtable.set('firstName','areen');

    expect(hashtable.get('hi')).toBeNull();
  });
  it('can Successfully handle a collision within the hashtable',()=>{
    let hashtable = new HashTable(50);
    hashtable.set('add','areen');
    hashtable.set('dad','hello');

    expect(hashtable.contains('add')).toBeDefined();
    expect(hashtable.contains('dad')).toBeDefined();

  });
  it('can Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new HashTable(50);
    hashtable.set('add','areen');
    hashtable.set('dad','hello');

    expect(hashtable.get('add')).toEqual('areen');
    expect(hashtable.get('dad')).toEqual('hello');
  });
});

'Use strict';

function leftJoin(table1, table2) {
 
  let result = [];

  for (let i = 0; i <= table1.table.length - 1; i++) {
    if (table1.table[i]) {
      let key = [Object.keys(table1.table[i].head.value)[0]][0];
      let value = [Object.values(table1.table[i].head.value)[0]][0];
      result.push([key, value]);
      //   console.log('key1',key);
      //   console.log('value1',value);
      //   console.log('-------------------------');

      if (table1.table[i].head.next) {
        let current = table1.table[i].head.next;

        while (current) {
          // console.log('current',current);
          let key = Object.keys(current.value)[0];
          // console.log('hash   ',key,'   ',table1.hash(key));
          let value = Object.values(current.value)[0];
          //   console.log('-------------------------');
          //   console.log('key',key);
          //   console.log('value',value);
          result.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= result.length - 1; j++) {
    // console.log('result[j][0]',result[j][0])
    let join = table2.get(result[j][0]);
    //console.log(join);
    result[j].push(join);
  }
  return result.length === 0 ? null : result;
}

module.exports = leftJoin;
// const HashTable = require('../hashtable/hashtable');
// let hashtable1 = new HashTable(16);
// let hashtable2 = new HashTable(16);
// hashtable1.set('fond', 'enamour');
// hashtable1.set('wrath', 'anger');
// hashtable1.set('diligent', 'employed');
// hashtable1.set('outfit', 'garb');
// hashtable1.set('guide', 'usher');

// hashtable2.set('fond', 'averse');
// hashtable2.set('wrath', 'delight');
// hashtable2.set('diligent', 'idle');
// hashtable2.set('guide', 'follow');
// hashtable2.set('flow', 'jam');

// let results = leftJoin(hashtable1, hashtable2);

// console.log(results);


// let hashtable1 = new HashTable(16);
//     let hashtable2 = new HashTable(16);
//     let hashtable3 = new HashTable(16);

//     hashtable3.set('fond', 'enamour');
//     hashtable3.set('wrath', 'anger');
//     hashtable3.set('diligent', 'employed');
//     hashtable3.set('outfit', 'garb');
//     hashtable3.set('guide', 'usher');

//     let result = leftJoin(hashtable1, hashtable2);
//     let result2 = leftJoin(hashtable1, hashtable3);

//     console.log(result);
//     console.log(result2)


// let hashtable1 = new HashTable(16);
// let hashtable2 = new HashTable(16);
// hashtable1.set('fond', 'spice');
// hashtable1.set('wrath', 'anger');
// hashtable1.set('diligent', 'employed');
// hashtable1.set('outfit', 'garb');
// hashtable1.set('guide', 'usher');

// hashtable2.set('sugar', 'averse');
// hashtable2.set('salt', 'delight');
// hashtable2.set('pepper', 'idle');
// hashtable2.set('florence', 'follow');
// hashtable2.set('waterfall', 'jam');
// let results = leftJoin(hashtable1, hashtable2);

// console.log(results);

// let hashtable1 = new HashTable(2);
// let hashtable2 = new HashTable(2);
// hashtable1.set('fond', 'spice');
// hashtable1.set('wrath', 'anger');
// hashtable1.set('wrath', 'employed');
// hashtable1.set('outfit', 'garb');
// hashtable1.set('guide', 'usher');

// hashtable2.set('sugar', 'averse');
// hashtable2.set('salt', 'delight');
// hashtable2.set('pepper', 'idle');
// hashtable2.set('florence', 'follow');
// hashtable2.set('waterfall', 'jam');
// let results = leftJoin(hashtable1, hashtable2);

// console.log(results);

// console.log(hashtable1.hash('found'));
// console.log(hashtable1.hash('wrath'));
// console.log(hashtable1.hash('wrath'));
// console.log(hashtable1.hash('outfit'));
// console.log(hashtable1.hash('guide'));

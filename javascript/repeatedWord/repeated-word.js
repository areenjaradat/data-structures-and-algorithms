'use strict';

const HashTable=require('../hashtable/hashtable');


function repeatedWord(str){
  //let arr=str.split(' ');
  let arr= str.match(/\w+/g);
  //console.log(arr);
  let hashtable=new HashTable(1024);
  for(let i=0;i<arr.length;i++){
    //console.log(arr[i].toLowerCase());
    //console.log('hashtable.contains(arr[i])',hashtable.contains(arr[i]));
    if(hashtable.contains(arr[i].toLowerCase())){
      return arr[i];
    }
    hashtable.set(arr[i].toLowerCase(),arr[i].toLowerCase());
  }
  return 'All words are unique!';
}

//console.log(repeatedWord('Once upon a time, there was a brave princess who...'));
//console.log(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));
//console.log(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'));

module.exports=repeatedWord;

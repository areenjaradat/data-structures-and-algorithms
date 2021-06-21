'use strict';

const HashTable=require('../hashtable/hashtable');

function treeIntersection(tree1,tree2){
  let result=[];
  const hashTable=new HashTable(1024);

  let arrayTree=tree1.preOrder();
  for(let i=0;i<arrayTree.length;i++){
    if(!hashTable.contains(arrayTree[i].toString())){
      hashTable.set(arrayTree[i].toString(),arrayTree[i].toString());
    }
  }
  let arrayTree2=tree2.preOrder();
  for(let i=0;i<arrayTree2.length;i++){
    if (hashTable.contains(arrayTree2[i].toString())) {
      result.push(arrayTree2[i]);
    }
  }
  if(result.length){
    return result;
  }else{
    return 'No Common values';
  }
}
module.exports=treeIntersection;

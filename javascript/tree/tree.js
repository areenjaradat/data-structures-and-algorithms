'use strict';

const Node=require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];
    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }


  findMaximumValue(){


    let max = 0;
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    for (let i = 0; i < results.length; i++) {
      if (max < results[i]) {
        max = results[i];
      }
    }
    return max;

  }

}
class BinarySearchTree{
  constructor(root=null){
    this.root=root;
  }

  add(value) {
    if(Number.isInteger(value)){
      const newNode=new Node(value);

      if (this.root === null) {
        this.root = newNode;
        return;
      } else {
        let traverse = (node) => {
          if (value < node.value) {
            if (node.left === null) {
              node.left = newNode;
              return;
            } else if (node.left !== null) {
              return traverse(node.left);
            }
          } else if (value > node.value) {
            if (node.right === null) {
              node.right = newNode;
              return;
            } else if (node.right !== null) {
              return traverse(node.right);
            }
          } else {
            return null;
          }
        };
        return traverse(this.root);
      }
    }else{
      return 'not number';
    }
  }
  contains(value){
    if(Number.isInteger(value)){
      if(this.root===null){
        return 'empty tree';
      }
      let traverse = (node) => {
        if (!node) {
          return false;
        }
        if (node.value === value) {
          return true;
        }else if (value < node.value) {
          return traverse(node.left);
        }else {
          return traverse(node.right);
        }
      };
      return traverse(this.root);
    }else{
      return 'not number';
    }

  }
}

//let tree = new BinarySearchTree();

// console.log(tree.root);
// tree.add(5);
// tree.add(3);
// tree.add(10);
// tree.add(20);
// tree.add(133);
// console.log(tree.root);
// console.log(tree.contains(133));
// console.log(tree.contains(1338));
// console.log(tree.contains('1338'));
module.exports ={BinaryTree,BinarySearchTree};

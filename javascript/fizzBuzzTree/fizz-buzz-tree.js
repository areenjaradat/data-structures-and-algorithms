'use strict';
class Node {
  constructor(value) {
    this.value = value;
  }
}
class Tree {
  constructor() {
    this.root = null;
    this.children = [];
  }
  addNode(value) {
    const node = new Node(value);
    if(this.root === null) {
      this.root = node;
    } else {
      this.children.push(node);
    }
    return node;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root)
  {
    return 'tree is empty';
  }
  if (tree.root.value % 3 === 0 && tree.root.value % 5 === 0) {
    tree.root.value = 'FizzBuzz';
  } else if (tree.root.value % 3 === 0) {
    tree.root.value = 'Fizz';
  } else if (tree.root.value % 5 === 0) {
    tree.root.value = 'Buzz';
  } else {
    tree.root.value = tree.root.value .toString();
  }

  for (let i = 0; i < tree.children.length; i++) {
    if (tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0) {
      tree.children[i].value = 'FizzBuzz';
    } else if (tree.children[i].value % 3 === 0) {
      tree.children[i].value = 'Fizz';
    } else if (tree.children[i].value % 5 === 0) {
      tree.children[i].value = 'Buzz';
    } else {
      tree.children[i].value = tree.children[i].value.toString();
    }

  }
  return tree;
}

module.exports = {
  Node,
  Tree,
  fizzBuzzTree,
};

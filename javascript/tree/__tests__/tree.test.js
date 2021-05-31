'use strict';


const Node=require('../node');
const {BinaryTree,BinarySearchTree}=require('../tree');

describe('test tree',()=>{

  let tree;
  beforeAll(()=> {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });
  it('1. Can successfully instantiate an empty tree',()=>{
    let newTree=new BinaryTree();
    expect(newTree.root).toBeNull();
  });
  it('2. Can successfully instantiate a tree with a single root node',()=>{

    let value=1;
    let node=new Node(value);
    let newTree=new BinaryTree(node);
    expect(newTree.root.value).toEqual(value);
  });
  it('3. Can successfully add a left child and right child to a single root node',()=>{

    let value1=1;
    let value2=2;
    let value3=3;
    let node1=new Node(value1);
    let node2=new Node(value2);
    let node3=new Node(value3);
    let newTree=new BinaryTree(node1);
    node1.left=node2;
    node1.right=node3;
    expect(newTree.root.value).toEqual(value1);
    expect(newTree.root.left.value).toEqual(value2);
    expect(newTree.root.right.value).toEqual(value3);
  });

  it('4. Can successfully return a collection from a preorder traversal',()=>{
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expected);
  });
  it('5. Can successfully return a collection from an inorder traversal',()=>{
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });
  it('6. Can successfully return a collection from a postorder traversal',()=>{
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
  it('7. Can successfully return a maximum value',()=>{

    expect(tree.findMaximumValue()).toEqual(9);
  });
  it('8. Can successfully return a array in bradth first search',()=>{
    // console.log(tree);
    // console.log(tree.breadthFirst());
    const tree1=new BinaryTree();
    expect(tree.breadthFirst()).toEqual( [1, 2, 3, 6, 4,5, 7, 8, 9]);
    expect(tree1.breadthFirst()).toEqual('Tree is empty');
  });
  it('1. Can successfully instantiate an empty BinarySearchTree',()=>{
    let newBinarySearchTree=new BinarySearchTree();
    expect(newBinarySearchTree.root).toBeNull();
  });
  it('2. Can successfully instantiate a BinarySearchTree with a single root node',()=>{

    let value=1;

    let newBinarySearchTree=new BinarySearchTree();
    newBinarySearchTree.add(value);
    expect(newBinarySearchTree.root.value).toEqual(value);
  });
  it('3. if add not anumber',()=>{

    let value='s';

    let newBinarySearchTree=new BinarySearchTree();
    expect(newBinarySearchTree.add(value)).toEqual('not number');
  });
  it('4. Can successfully add a left child and right child to a single root node',()=>{

    let value1=6;
    let value2=4;
    let value3=10;
    let node1=new Node(value1);
    let newBinarySearchTree=new BinarySearchTree(node1);
    newBinarySearchTree.add(value2);
    newBinarySearchTree.add(value3);
    expect(newBinarySearchTree.root.value).toEqual(value1);
    expect(newBinarySearchTree.root.left.value).toEqual(value2);
    expect(newBinarySearchTree.root.right.value).toEqual(value3);
  });
  it('5. can find value in BinarySearchTree',()=>{

    let value1=6;
    let value2=4;
    let value3=10;
    let node1=new Node(value1);
    let newBinarySearchTree=new BinarySearchTree(node1);
    newBinarySearchTree.add(value2);
    newBinarySearchTree.add(value3);
    expect(newBinarySearchTree.contains(10)).toBeTruthy();
    expect(newBinarySearchTree.contains(11)).toBeFalsy();
    expect(newBinarySearchTree.contains('s')).toEqual('not number');

  });
  it('6. search in BinarySearchTree',()=>{

    let newBinarySearchTree=new BinarySearchTree();
    expect(newBinarySearchTree.contains(10)).toEqual('empty tree');
  });
  it('7. can add values and find values  in BinarySearchTree',()=>{

    let value1=6;
    let value2=4;
    let value3=10;
    let value4=20;
    let value5=1;
    let value6=20;
    let value7=70;
    let node1=new Node(value1);
    let newBinarySearchTree=new BinarySearchTree(node1);
    newBinarySearchTree.add(value2);
    newBinarySearchTree.add(value3);
    newBinarySearchTree.add(value4);
    newBinarySearchTree.add(value5);
    newBinarySearchTree.add(value6);
    newBinarySearchTree.add(value7);
    expect(newBinarySearchTree.contains(10)).toBeTruthy();
    expect(newBinarySearchTree.contains(value7)).toBeTruthy();
    expect(newBinarySearchTree.contains(value5)).toBeTruthy();
    expect(newBinarySearchTree.contains(11)).toBeFalsy();
    expect(newBinarySearchTree.contains('s')).toEqual('not number');

  });

});


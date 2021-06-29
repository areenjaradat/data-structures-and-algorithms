'use strict';

const DepthFirst = require('../graph-depth-first');
const {Vertex} = require('../../graph/graph');

describe('Graph Depth Test', () => {
  it('should return all nodes depth first properly', () => {
    const graph = new DepthFirst();

    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const three = new Vertex(3);
    const seven = new Vertex(7);
    const eight = new Vertex(8);

    const expectedSet = new Set();
    expectedSet.add(ten);
    expectedSet.add(two);
    expectedSet.add(seven);
    expectedSet.add(six);
    expectedSet.add(eight);
    expectedSet.add(three);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(three);
    graph.addVertex(seven);
    graph.addVertex(eight);

    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    graph.addEdge(ten, three);
    graph.addEdge(ten, seven);
    graph.addEdge(two, seven);
    graph.addEdge(six, seven);
    graph.addEdge(six, eight);
    graph.addEdge(three, eight);
    graph.addEdge(eight, seven);
    //console.log(expectedSet);
    expect(graph.depth(ten)).toEqual(expectedSet);
  });

});

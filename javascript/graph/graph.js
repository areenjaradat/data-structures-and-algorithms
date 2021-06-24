'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      return 'INVALID NODE';
    } else {
      //console.log('startVertex',startVertex);
      const adjacencies = this._adjacencyList.get(startVertex);
      //console.table(adjacencies);
      const edge = new Edge(endVertex, weight);
      //console.log('edge',edge);
      adjacencies.push(edge);
      return edge;
    }
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      return 'INVALID NODE';
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  getNodes() {
    return this._adjacencyList.entries();
  }

  getSize() {
    return this._adjacencyList.size > 0 ? this._adjacencyList.size : null;
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log([vertex, edge]);
    }
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};


// const myGraph = new Graph();
// const zero = new Vertex(0);
// const one = new Vertex(1);
// const two = new Vertex(2);
// const three = new Vertex(3);
// const four = new Vertex(4);
// const five = new Vertex(5);

// myGraph.addVertex(zero);
// myGraph.addVertex(one);
// myGraph.addVertex(two);
// myGraph.addVertex(three);
// myGraph.addVertex(four);
// myGraph.addVertex(five);

// myGraph.addEdge(zero, two);
// myGraph.addEdge(two, three);
// myGraph.addEdge(two, four);
// myGraph.addEdge(three, five);
// myGraph.addEdge(four, five);
// myGraph.addEdge(one, three);
// myGraph.printAll();
// console.log('-----------------');
// console.log(myGraph.getNeighbors(two));
// console.log('-----------------');
// console.log(myGraph.getNeighbors(one));

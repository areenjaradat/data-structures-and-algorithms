'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');
const {Graph} = require('../graph/graph');

class BreadthFirst extends Graph {

  breadth(startingNode) {
    if(!startingNode) return 'INVALID NODE';

    const queue = new Queue();

    const visitedNodes = new Set();



    queue.enqueue(startingNode);
    visitedNodes.add(startingNode);

    //console.log('startingNode',startingNode);
    //console.log('queue',queue);
    //console.log(queue.isEmpty())
    while (!queue.isEmpty()) {
      //console.log('sdgdg')
      const currentNode = queue.dequeue();

      //console.log('currentNode',currentNode);

      const neighbors = this.getNeighbors(currentNode);
      //console.log(neighbors);

      for (let neighbor of neighbors) {
        //console.log(neighbor);
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {

          continue;
        } else {

          visitedNodes.add(neighborNode);

          queue.enqueue(neighborNode);

        }
      }
    }
    // console.log('visitedNodes',visitedNodes);
    return visitedNodes.size > 0 ? visitedNodes : 'EMPTY GRAPH';

  }
}

module.exports = BreadthFirst;


// const {Vertex} = require('../graph/graph');
// const graph = new BreadthFirst();

// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six = new Vertex(6);
// const three = new Vertex(3);
// const seven = new Vertex(7);
// const eight = new Vertex(8);

// const expectedSet = new Set();
// expectedSet.add(ten);
// expectedSet.add(two);
// expectedSet.add(six);
// expectedSet.add(three);
// expectedSet.add(seven);
// expectedSet.add(eight);

// graph.addVertex(ten);
// graph.addVertex(two);
// graph.addVertex(six);
// graph.addVertex(three);
// graph.addVertex(seven);
// graph.addVertex(eight);

// graph.addEdge(ten, two);
// graph.addEdge(ten, six);
// graph.addEdge(ten, three);
// graph.addEdge(ten, seven);
// graph.addEdge(two, seven);
// graph.addEdge(six, seven);
// graph.addEdge(six, eight);
// graph.addEdge(three, eight);
// graph.addEdge(eight, seven);


// console.log('expectedSet',expectedSet);
// console.table(graph);
// graph.printAll();
// console.log(graph.breadth(ten));

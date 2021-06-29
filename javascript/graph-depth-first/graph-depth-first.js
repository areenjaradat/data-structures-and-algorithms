'use strict';

const {Graph} = require('../graph/graph');

class DepthFirst extends Graph {
  depth(startingNode) {

    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {

      visitedNodes.add(node);

      //console.log('node',node);
      const neighbors = this.getNeighbors(node);

      //console.log(neighbors);
      for (let edge of neighbors) {

        if (!visitedNodes.has(edge.vertex)) {

          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startingNode);

    return visitedNodes ;
  }
}

module.exports = DepthFirst;

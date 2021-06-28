'use strict';

function finfEdge(graph, cityArray) {
  let totalCost = 0;
  let check = false;

  for (let i = 0; i < cityArray.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityArray[i]);
    // console.log(neighbors)
    for (let j = 0; j <= neighbors.length - 1; j++) {
    // console.log('cityArray[i]',cityArray[i])
    // console.log('cityArray[i + 1]',cityArray[i + 1])
    // console.log('neighbors[j].vertex',neighbors[j].vertex)
      if (cityArray[i + 1] === neighbors[j].vertex) {
        totalCost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      totalCost = 0;
      check = false;
      return `${check}, $${totalCost}`;
    }
  }

  return `${check}, $${totalCost}`;
}

module.exports = finfEdge;


// const {Graph} = require('../graph/graph');

// const graph = new Graph();

// let Pandora = graph.addVertex('Pandora');
// let Metroville = graph.addVertex('Metroville');
// let Narnia = graph.addVertex('Narnia');
// let Arendelle = graph.addVertex('Arendelle');
// let Naboo = graph.addVertex('Naboo');
// let Monstropolis = graph.addVertex('Monstropolis');

// graph.addEdge(Pandora, Arendelle, 150);
// graph.addEdge(Pandora, Metroville, 82);
// graph.addEdge(Metroville, Arendelle, 99);
// graph.addEdge(Narnia, Metroville, 37);
// graph.addEdge(Metroville, Naboo, 26);
// graph.addEdge(Narnia, Naboo, 250);
// graph.addEdge(Metroville, Monstropolis, 105);
// graph.addEdge(Monstropolis, Naboo, 73);
// graph.addEdge( Arendelle,Monstropolis, 42);

// const graph2 = new Graph();
// const Herbalife = graph2.addVertex('Herbalife');

// console.log(finfEdge(graph, [Pandora, Metroville]));
// console.log(finfEdge(graph, [Pandora, Monstropolis]));

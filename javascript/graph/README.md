# Graphs

## Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

1. `AddNode()`
    - Adds a new node to the graph
    - Takes in the value of that node
    - Returns the added node
2. `AddEdge()`
    - Adds a new edge between two nodes in the graph
    - Include the ability to have a “weight”
    - Takes in the two nodes to be connected by the edge
    - Both nodes should already be in the Graph
3. `GetNodes()`
    - Returns all of the nodes in the graph as a collection (set, list, or similar)
4. `GetNeighbors()`
    - Returns a collection of edges connected to the given node
    - Takes in a given node
    - Include the weight of the connection in the returned collection
5. `Size()`
    - Returns the total number of nodes in the graph

## Approach & Efficiency

**Big O:**

- Time

      - **O(1)** for all methods

- Space

      - **O(n)** for addVertex

      - **O(1)** for other methods

## API

The graph code contains three classes, which are, Graph, Vetex, and Edge. the Graph class depends on on the Vetex and Edge classes, and has these methods:

1. `addNode(vertex)`
    - Adds a new node to the graph
    - Takes in the value of that node
    - Returns the added node
2. `addEdge(startVertex, endVertex, weight)`
    - Adds a new edge between two nodes in the graph
    - Include the ability to have a “weight”
    - Takes in the two nodes to be connected by the edge
    - Both nodes should already be in the Graph
3. `getNodes()`
    - Returns all of the nodes in the graph as a collection (set, list, or similar)
4. `getNeighbors(vertex)`
    - Returns a collection of edges connected to the given node
    - Takes in a given node
    - Include the weight of the connection in the returned collection
5. `getSize()`
    - Returns the total number of nodes in the graph

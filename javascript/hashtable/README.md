# Hash Tables

## Challenge

Implement a Hashtable with the following methods:

- `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- `get`: takes in the key and returns the value from the table.
- `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
- `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

- **add:** space O(1)/time O(1)
- **hash:** space O(1)/time O(1)
- **contains:** space O(1)/time O(1)
- **get:** space O(1)/time O(1) - time O(n) if there is a collision

## API

The hashtable code contains a class called HashTable, and it requires the LinkedList class that we've created before, it has these methods:

1. `add(key, value)` method: which takes a key and a value as an argument, hashes the key and adding the pair to the table as {key: value} object.
2. `hash(key)` method: which takes a key as an argument, and returns an index in the array within its range based on this key.
3. `contains(key)` method: which takes a key as an argument, and returns true if the key exists, and returns false otherwise.
4. `get(key)` method: which takes a key as an argument, and returns its value if it exists, and returns null if it does'nt.

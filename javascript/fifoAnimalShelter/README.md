# FIFO Animal Shelter

First-in, First out Animal Shelter.

## Challenge

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency

1. create class AnimalShelter has two properties one for dog queue the seconed for cat queue.
2. create method enqueue in AnimalShelter class check the type if it cat add it to cat queue if it dog add to dog queue.
3. create method dequeue in AnimalShelter class check the type if it cat delete it from cat queue if it dog delete from dog queue.

![AnimalShelter](../assest/challenge11.png)

'use strict';

const AnimalShelter=require('../fifo-animal-shelter');

describe('AnimalShelter testing',()=>{
  it('initialize the object AnimalShelter',()=>{
    const animalShelter=new AnimalShelter();
    expect(animalShelter instanceof AnimalShelter).toBeTruthy();
  });
  it('enqueue cat to  AnimalShelter',()=>{
    const animalShelter=new AnimalShelter();
    let type='cat';
    animalShelter.enqueue(type);
    expect(animalShelter.cat.front).toEqual('cat');
    expect(animalShelter.dog.front).toBeNull();
  });
  it('enqueue dog to  AnimalShelter',()=>{
    const animalShelter=new AnimalShelter();
    let type='dog';
    animalShelter.enqueue(type);
    expect(animalShelter.cat.front).toBeNull();
    expect(animalShelter.dog.front).toEqual('dog');
  });
  it('enqueue bird to  AnimalShelter',()=>{
    const animalShelter=new AnimalShelter();
    let type='bird';
    animalShelter.enqueue(type);
    expect(animalShelter.cat.front).toBeNull();
    expect(animalShelter.dog.front).toBeNull();
  });

  it('dequeue from  AnimalShelter',()=>{
    const animalShelter=new AnimalShelter();

    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dequeue('cat')).toEqual('cat');
    expect(animalShelter.dequeue('dog')).toEqual('dog');
    expect(animalShelter.dequeue('bird')).toBeNull();
  });
});

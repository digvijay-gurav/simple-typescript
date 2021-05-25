"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup("mammel");
    return animal;
}
const cat = initializeAnimal(Cat, "kitty");
const dog = initializeAnimal(Dog, "Ava");
dog.bark();

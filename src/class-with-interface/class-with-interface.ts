interface Animal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

class Dog implements Animal {
  group: string | undefined;
  constructor(public name: string) {}
  setGroup(group: string) {
    this.group = group;
  }
  bark(){}
}

class Cat implements Animal {
  group: string | undefined;
  constructor(public name: string) {}
  setGroup(group: string) {
    this.group = group;
  }
}

// this is a type of constructor which both cat and dog are using
interface AnimalConstructor<T> {
  new (name: string): T;
}
function initializeAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
  const animal = new Animal(name);
  animal.setGroup("mammel");
  return animal
}
const cat = initializeAnimal(Cat, "kitty");
const dog = initializeAnimal(Dog, "Ava");
dog.bark()

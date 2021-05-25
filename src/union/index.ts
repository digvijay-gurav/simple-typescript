/* 
    In case of union types typescript only allows using methods and properties which are common to all types, 
    otherwise we have to manually check type of argument to use specific type methods
    typescript is smart enough to let you allow other type methods in else block once we have checked for a specific type in if block
*/
export function someFn(anyArgument: number | string | boolean) {
  if (typeof anyArgument === "string") {
    anyArgument.toUpperCase();
  } else if (typeof anyArgument === "number") {
    anyArgument.toFixed();
  } else {
    anyArgument.valueOf();
  }
}

interface Dog {
  bark(): void;
  walk(): void;
}
interface Cat {
  meow(): void;
  walk(): void;
}
// checking for custom type (Dog)
function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>someObj).bark !== undefined;
}
function callMyPet(pet: Dog | Cat) {
  // use without type checking
  pet.walk();
  if (isDog(pet)) {
    pet.bark();
  }
}

// we had to check if property is undefined to verify object's type in case of interface
// if it was a class we could have used the instace of operator

class Foo {
  constructor(public foo: number, public commonProp: string) {}
}
class Bar {
  constructor(public bar: number, public commonProp: string) {}
}

function isFooOrBar(someObj: Foo | Bar) {
  if (someObj instanceof Foo) {
    someObj.foo;
  } else {
    someObj.bar;
  }
}

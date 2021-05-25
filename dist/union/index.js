"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someFn = void 0;
/*
    In case of union types typescript only allows using methods and properties which are common to all types,
    otherwise we have to manually check type of argument to use specific type methods
    typescript is smart enough to let you allow other type methods in else block once we have checked for a specific type in if block
*/
function someFn(anyArgument) {
    if (typeof anyArgument === "string") {
        anyArgument.toUpperCase();
    }
    else if (typeof anyArgument === "number") {
        anyArgument.toFixed();
    }
    else {
        anyArgument.valueOf();
    }
}
exports.someFn = someFn;
// checking for custom type (Dog)
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function callMyPet(pet) {
    // use without type checking
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
}
// we had to check if property is undefined to verify object's type in case of interface
// if it was a class we could have used the instace of operator
class Foo {
    constructor(foo, commonProp) {
        this.foo = foo;
        this.commonProp = commonProp;
    }
}
class Bar {
    constructor(bar, commonProp) {
        this.bar = bar;
        this.commonProp = commonProp;
    }
}
function isFooOrBar(someObj) {
    if (someObj instanceof Foo) {
        someObj.foo;
    }
    else {
        someObj.bar;
    }
}

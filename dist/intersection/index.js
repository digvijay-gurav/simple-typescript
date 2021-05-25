"use strict";
// by using '&' we can access both the members of types defined
function X(obj) {
    return obj.a + obj.b + obj.c;
}
// combine two objects into one
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = { a: 1 };
const objB = { b: 2 };
const res = combine(objA, objB);

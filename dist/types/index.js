"use strict";
// Boolean
const b = false;
// Number
const num = 1 + 0b1 + 0o1 + 0x1;
// String
const hello = "Hello";
// Null and Undefined
let n = null;
let u = undefined;
function upperCaseFirstLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
}
// primitives
const primitiveTypes = 123;
// non primitives are of type object as their prototype
const nonPrimitive = {} || new Map() || new Set() || function abc() { };
// tuple is a heterogeneous collection of known type elements
const tuple = ["abc", 123, new Map(), null];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 30] = "Red";
    Color[Color["Green"] = 23] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
const color = Color.Green;
console.log("color ", color);
console.log("color enum reverse lookup ", Color[30]);
// we cannot reverse lookup from string values
/*
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
Color['red'] gives us undefined
*/
// ANY
let ANY;
ANY = "string";
ANY = 1;
ANY = true;
// Type Assertions
// const email = document.getElementById('email')
// if(email) {
//     email.addEventListener('change', (e) => {
//         const input = e.currentTarget as HTMLInputElement;
//     })
// }

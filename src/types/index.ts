// Boolean
const b: boolean = false;

// Number
const num = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = "Hello";

// Null and Undefined

let n: null = null;
let u: undefined = undefined;

function upperCaseFirstLetter(str: string) {
  return str[0].toUpperCase() + str.substr(1);
}

// primitives
const primitiveTypes: number | string | null | undefined | symbol = 123;

// non primitives are of type object as their prototype

const nonPrimitive: object = {} || new Map() || new Set() || function abc() {};

// tuple is a heterogeneous collection of known type elements
const tuple: [string, number, object, null] = ["abc", 123, new Map(), null];

// Enum

enum Color {
  Red = 30,
  Green = 23,
  Blue = 12,
}
const color: Color = Color.Green;
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
let ANY: any;
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


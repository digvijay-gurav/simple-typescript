interface A {
  readonly someProp: number;
}
interface B {
  someProp: number;
}

const a: A = {
  someProp: 2,
};

const c: B = a;

// index signature
/* if we want to define type of object with dynamic property names
    we can define type of key and values to be assigned
*/

// following interface will allow dynamic properties to be of type string or number
interface C {
  [key: string]: number | string;
  someProp: number;
}
// interface with function type
interface Sum {
  (a: number, b: number): number;
  someProp: string;
}
const sum: Sum = (a, b) => a + b;
sum.someProp = "abc";

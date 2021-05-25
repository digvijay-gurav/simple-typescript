function sum(a: number, b: number): number {
  return a + b;
}

// specifying function as a type

type myFunc = (a: number, b: number) => number;

// we don't need to specify argument types if we use function as a type.
const multiply: myFunc = (c, d) => c * d;

// function overloading: we can define multiple signatures of a function with same name

// area of rectangle
function calculateArea(length: number, width: number): number;
// area of square
function calculateArea(side: number): number;

function calculateArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return args[0] * 2;
}

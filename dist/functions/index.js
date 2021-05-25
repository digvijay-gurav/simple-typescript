"use strict";
function sum(a, b) {
    return a + b;
}
// we don't need to specify argument types if we use function as a type.
const multiply = (c, d) => c * d;
function calculateArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return args[0] * 2;
}

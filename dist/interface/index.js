"use strict";
const a = {
    someProp: 2,
};
const c = a;
const sum = (a, b) => a + b;
sum.someProp = "abc";

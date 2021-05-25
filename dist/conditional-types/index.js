"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someFunction = void 0;
function someFunction(value) {
    const someOtherFunction = (someArg) => {
        const a = someArg;
    };
    return someOtherFunction;
}
exports.someFunction = someFunction;
const res = someFunction(true);
// Tips : 
/*
If you are not aware of a type you can use type 'Unknown' the benefits of unknown over type any are.
we will get ts error while using a variable of type unknown but we won't be getting any error on using any type .
Moreover we can assign type any to any other types but we can't assign unknown to vaiable of type string, etc
*/ 

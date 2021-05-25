"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// we can augment a module i.e we can add a function to React library
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
react_1.default.Component.prototype.helloWorld = function () {
    return "hello world!!";
};
class MyComponent extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", null, this.helloWorld());
    }
}
console.log(server_1.renderToString(react_1.default.createElement(MyComponent, null)));

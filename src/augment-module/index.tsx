// we can augment a module i.e we can add a function to React library
import React from "react";
import { renderToString } from "react-dom/server";

// we declare the package name to extend its functionalities and add property declarations in interface we are going to use. We shall check the name of interface from library then add our custom methods
// we can only modify existing interfaces not add any new interface or function, if we do so we won't be able to define them later as they will be read-only
declare module "react" {
  interface Component {
    helloWorld(): string;
  }
}

React.Component.prototype.helloWorld = function () {
  return "hello world!!";
};

class MyComponent extends React.Component {
  render() {
    return <div>{this.helloWorld()}</div>;
  }
}
console.log(renderToString(<MyComponent />));

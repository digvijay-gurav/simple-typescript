"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
class Robot {
    constructor(name, _color) {
        this._color = _color;
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    static isColorAvailable(color) {
        return Robot.AVAILABLE_COLORS.includes(color);
    }
    askName() {
        console.log(__classPrivateFieldGet(this, _name));
    }
    move(distance) {
        console.log("moved by", distance);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`${color} is not available`);
        }
        this._color = color;
    }
}
_name = new WeakMap();
Robot.AVAILABLE_COLORS = ["red", "green", "blue"];
class FlyingRobot extends Robot {
    constructor(name, color, jetpackSize) {
        super(name, color);
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log("overrriden ", distance);
    }
}
const robot = new Robot("huskey", "grt");
robot.move(2);
// if we use protected modifier, the property can be referred from within the class or class extending it, and not by the instances of any of these classes
const flyingRobot = new FlyingRobot("huskey2", "green", 23);
// if we are specifying any access modifiers then we can use shot hand notation of specifying them in constructor and skip assigning values in constructor
// constructor(public name: string) {}
// static properties are public by default. we can make them private or readonly using appropriate reserved words before property name
/*
ecmascript has a feature of defining private fields in a class by using # (#name: string)
this is an alternative of using (private name:string) but when ts compiles to js private fields are cosidered as normal fields and are accessible at runtime even though we get error at compile time
hence if we are writing a library we should be using es6 feature of private variables.
however if we have a code pipeline which doesn't allows code to get merged on typescript errors, then it is fine too.

NOTE: es6 uses weakmap to define privacy of a variable after compilation
*/ 

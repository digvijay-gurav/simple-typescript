"use strict";
function updateStarShip(id, starShip) { }
updateStarShip(1, { name: "explore" });
// Record<K, T>
const starShips = {
    Explorer1: {
        name: "Explorer1",
        enableHyperJump: true,
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperJump: false,
    },
};
const phone = {
    model: "iphone",
};
let johnsDrink;
johnsDrink = "Coffee";
let janesDrink;
janesDrink = "Leamonade";
let janesLikesDrink;
// NonNullable removes null and undefined which are default in case of union or intersection
function paintStarShip(id, color) {
    return {
        id,
        color,
    };
}
// paintStarShip(1, undefined);
// InstanceType<T>
class Car {
    constructor(name) {
        this.name = name;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
function Deletable(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.deleted = false;
        }
        delete() { }
    };
}
const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
class Profile {
    constructor(user, car) {
        this.user = user;
        this.car = car;
    }
}
const profile = new Profile(new DeletableUser("john"), new DeletableCar("ferrari"));
let myObject = {
    sayHello() {
        return this.helloWorld();
    },
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return "new hello world";
    },
});
console.log(myObject.sayHello());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function updateStarShip(id, starShip) { }
updateStarShip(1, { name: "explore" });
// Record<K, T>
var starShips = {
    Explorer1: {
        name: "Explorer1",
        enableHyperJump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperJump: false
    }
};
var phone = {
    model: "iphone"
};
var johnsDrink;
johnsDrink = "Coffee";
var janesDrink;
janesDrink = "Leamonade";
var janesLikesDrink;
// NonNullable removes null and undefined which are default in case of union or intersection
function paintStarShip(id, color) {
    return {
        id: id,
        color: color
    };
}
// paintStarShip(1, undefined);
// InstanceType<T>
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
function Deletable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.deleted = false;
            return _this;
        }
        class_1.prototype["delete"] = function () { };
        return class_1;
    }(Base));
}
var DeletableCar = Deletable(Car);
var DeletableUser = Deletable(User);
var Profile = /** @class */ (function () {
    function Profile(user, car) {
        this.user = user;
        this.car = car;
    }
    return Profile;
}());
var profile = new Profile(new DeletableUser("john"), new DeletableCar("ferrari"));
var myObject = {
    sayHello: function () {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld: function () {
        return "new hello world";
    }
});
console.log(myObject.sayHello());

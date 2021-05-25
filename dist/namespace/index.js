"use strict";
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
// merging namespaces
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.getX();
const someInterface = {
    x: 1,
    y: 2,
};
// merging some properties to a function along with function prototype props
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
// adding method to already defined enum
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Potato"] = "potato";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Potato + Vegetables.Tomato;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
//////////////////////////
// adding properties and function to already defined Salad class which is imported from third-party package
class Salad {
}
(function (Salad) {
    Salad.availableSaladDressings = ["olive oil", "yogurt"];
})(Salad || (Salad = {}));
Salad.availableSaladDressings;
// In order to use a property defined in first namespace declaration while defining second namespace declaration those properties must be exported 

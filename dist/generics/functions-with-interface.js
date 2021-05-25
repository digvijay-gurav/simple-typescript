"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpiredItems = exports.GenericClass = exports.genericArrowFunction = exports.genericFunction = void 0;
// Generic function
function genericFunction(x) {
    return x;
}
exports.genericFunction = genericFunction;
const genericArrowFunction = (x) => {
    return x;
};
exports.genericArrowFunction = genericArrowFunction;
// generic class can take a generic type as input and
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
exports.GenericClass = GenericClass;
const chocoCakes = [
    {
        expiryDate: new Date(),
        name: "Choco",
    },
];
const vanillaCakes = [
    {
        expiryDate: new Date(),
    },
];
// item should have expiryDate property by extending Expirable interface
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
exports.getExpiredItems = getExpiredItems;
// we can specify more specific types to generic functions by passing types that match the constraint specified while defining them (must extend Expirable interface)
const expiredChocoCakes = exports.getExpiredItems(chocoCakes);
const expiredVanillaCakes = exports.getExpiredItems(vanillaCakes);

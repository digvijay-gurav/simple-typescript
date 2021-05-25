"use strict";
// Generic function
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => {
    return x;
};
// generic class can take a generic type as input and
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
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
// we can specify more specific types to generic functions by passing types that match the constraint specified while defining them (must extend Expirable interface)
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
const getExpiredItems2 = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

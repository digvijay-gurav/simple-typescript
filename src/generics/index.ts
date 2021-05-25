// Generic function
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => {
  return x;
};

interface GenericInterface<T> {
  prop: T;
  somefunc(x: T): T;
}

// U specifies the call signature
interface GenericInterface<T> {
  <U>(x: U): T;
  prop: T;
}

// generic class can take a generic type as input and
class GenericClass<P> {
  constructor(public props: P) {}
  getProps(): P {
    return this.props;
  }
}

interface Expirable {
  expiryDate: Date;
}
interface ChocolateCake extends Expirable {
  name: string;
}
interface VanillaCake extends Expirable {}

const chocoCakes: ChocolateCake[] = [
  {
    expiryDate: new Date(),
    name: "Choco",
  },
];
const vanillaCakes: VanillaCake[] = [
  {
    expiryDate: new Date(),
  },
];

// item should have expiryDate property by extending Expirable interface
const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

// we can specify more specific types to generic functions by passing types that match the constraint specified while defining them (must extend Expirable interface)
const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

// we can also define type of generic function using interface

interface GetExpiredItemsFunction {
  <Item extends Expirable>(items: Array<Item>): Array<Item>;
}
const getExpiredItems2: GetExpiredItemsFunction = (items) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

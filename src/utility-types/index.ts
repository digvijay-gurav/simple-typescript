// typescript provides few utility methods and interfaces to use on our defined interfaces
// Partial<T>
interface StarShip {
  name: string;
  enableHyperJump: boolean;
}

function updateStarShip(id: number, starShip: Partial<StarShip>) {}
updateStarShip(1, { name: "explore" });
// Record<K, T>
const starShips: Record<string, StarShip> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperJump: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperJump: false,
  },
};
// Pick<K, T>
// this will pick a subset of properties from specified interface

type StarShipNameOnly = Pick<StarShip, "name">;

// Omit<T, K>
// opposit to Pick
type StarShipWithoutName = Omit<StarShip, "name">;

// Required<T>
// reverse of Partial<T> makes all required

// Readonly<T>
// all properties of this output interface cannot be modified after first initialization

interface Phone {
  model: string;
}
const phone: Readonly<Phone> = {
  model: "iphone",
};

// phone.model = "samsung";

// Exclude<T, U>
type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Leamonade";

let johnsDrink: AvailableDrinks;
johnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";

let janesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
janesDrink = "Leamonade";

// Extract <T,U>

type DrinksJaneLikes = "Tea" | "Leamonade" | "Mojito";
let janesLikesDrink: Extract<AvailableDrinks, DrinksJaneLikes>;

// NonNullable<T>
// by default all optional properties have union of type null and undefined. so to exl
// excludes all falsy types i.e without null and undefined

interface StarShipProperties {
  color?: "blue" | "red" | "green";
}

// NonNullable removes null and undefined which are default in case of union or intersection
function paintStarShip(
  id: number,
  color: NonNullable<StarShipProperties["color"]>
) {
  return {
    id,
    color,
  };
  // ReturnType allows us to deduce type of complex return objects by a function
  type paintStarshipReturn = ReturnType<typeof paintStarShip>;
}
// paintStarShip(1, undefined);

// InstanceType<T>

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

// use mixin for common functionality of delete

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean = false;
    delete() {}
  };
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  constructor(
    public user: DeletableUserInstance,
    public car: DeletableCarInstance
  ) {}
}

const profile = new Profile(
  new DeletableUser("john"),
  new DeletableCar("ferrari")
);

// ThisType<T>
/* using ThisType utility you can describe type of this object in case you want your this to refer to another object other than the one calling it
 */

interface MyObject {
  sayHello(): string;
}

interface MyObjectThis {
  helloWorld(): string;
}

let myObject: MyObject & ThisType<MyObjectThis> = {
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

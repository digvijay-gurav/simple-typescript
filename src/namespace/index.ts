namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

// merging namespaces
namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.getX();
const someInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2,
};

// merging some properties to a function along with function prototype props
function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

// adding method to already defined enum
enum Vegetables {
  Tomato = "tomato",
  Potato = "potato",
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Potato + Vegetables.Tomato;
  }
}
const salad = Vegetables.makeSalad();

//////////////////////////

// adding properties and function to already defined Salad class which is imported from third-party package
class Salad {}

namespace Salad {
  export const availableSaladDressings = ["olive oil", "yogurt"];
}
Salad.availableSaladDressings;

// In order to use a property defined in first namespace declaration while defining second namespace declaration those properties must be exported 



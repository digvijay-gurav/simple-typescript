interface IA {
  a: number;
}
interface IB {
  b: number;
}
interface IC {
  c: number;
}
// by using '&' we can access both the members of types defined
function X(obj: IA & IB & IC) {
  return obj.a + obj.b + obj.c;
}

// combine two objects into one
function combine<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjB & ObjB {
  return { ...objA, ...objB };
}

const objA = { a: 1 };
const objB = { b: 2 };
const res = combine(objA, objB);

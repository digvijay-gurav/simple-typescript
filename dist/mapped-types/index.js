"use strict";
// Mapped type helps you iterate over a union of properties and define your own type
/* type Properties = "propA" | "propB";

type MyMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: P ;
};

type MyNewType = MyMappedType<'propA' | 'propB'>
*/
// you can also take an existing type and transform it into another type, or make properties read-only
const someRecord = {
    A: 1,
    B: 2,
    otherProp: "some",
};

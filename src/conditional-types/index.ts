// if type T is assignable to type U return type X otherwise return type Y
// type someType = T extends U ? X : Y
type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

export function someFunction(value: SomeType) {
  const someOtherFunction = (
    someArg: SomeType extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}

const res = someFunction(true);

// distributive property
// never type is used to define a type which never existed. it is a unknown type

type StringOrNot<T> = T extends string ? string : never;
type AUnion = string | boolean | never;

// type Exclude<T, U> = T extends U ? never : T;

type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

// since comnditonal types are distributive it will take each type from union and compare with right hand side
/*
    'a' extends 'a' | 'b' ? never : 'a' => never
    'b' extends 'a' | 'b' ? never : 'b' => never
    'c' extends 'a' | 'b' ? never : 'c' => 'c'
    that is why type of ResultType is 'c'
*/
// another property of distributive type is that types passed within union are compared as it is with right hand side parameter, without wrapping them in a function or a tuple
// however if we wrap them in a function or tuple they will be compared as whole union against

type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;

// infer : to infer the whole type or a part of the type

type InferSomething<T> = T extends infer U ? U : never;
type inferredType = InferSomething<"I am a string">;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{
  a: { someAProp: 1 };
  b: { someBProp: "b" };
}>;

type MyFuncReturnValue = ReturnType<() => true>;

// utility functions like NonNullable and Exclude they use conditional types in their definitions.
// NonNullable is a type which returns never if input type is assigned to null or undefined :

type MyNonNullable<T> = T extends null | undefined ? never : T;
type Removedfalsy = MyNonNullable<
  number | boolean | false | 0 | 1 | true | null | undefined | "abc"
>;


// Tips : 
/* 
If you are not aware of a type you can use type 'Unknown' the benefits of unknown over type any are.
we will get ts error while using a variable of type unknown but we won't be getting any error on using any type .
Moreover we can assign type any to any other types but we can't assign unknown to vaiable of type string, etc
*/
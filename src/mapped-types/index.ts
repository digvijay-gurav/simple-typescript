// Mapped type helps you iterate over a union of properties and define your own type
/* type Properties = "propA" | "propB";

type MyMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: P ; 
};

type MyNewType = MyMappedType<'propA' | 'propB'>
*/
// you can also take an existing type and transform it into another type, or make properties read-only

type Properties = "propA" | "propB";

type MyMappedType<T> = {
  readonly [P in keyof T]: T[P] | null;
};

type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};
type MyNewType2 = Pick1<{ a: "a"; b: "b"; c: "v" }, "b" | "a">;

type Record1<K extends keyof any, T> = {
  [P in K]: T;
} & { otherProp: string };
const someRecord: Record1<"A" | "B", number> = {
  A: 1,
  B: 2,
  otherProp: "some",
};
// someRecord.apples = 10;
// someRecord.oranges = 10;
// someRecord[1] = 10;

interface Record2 {
  [key: string]: number;
}

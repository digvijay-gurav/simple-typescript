type AliasName = string | string[] | null;
type AliasName2 = { a: number } & { b: number };
type AliasName3<T> = T[];

// not recommended

type AliasName4 = {
  a: number;
  b: number;
};

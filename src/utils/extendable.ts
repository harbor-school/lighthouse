export type Extendtable<T> = {
  [P in keyof T]: T[P]
}

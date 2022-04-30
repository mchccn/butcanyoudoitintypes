export type Assert<S extends [V] extends [T] ? V : T, T, V extends T = T> = S;

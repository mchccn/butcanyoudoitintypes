/** @format */

export type RetainMutablity<S, T> = Readonly<T> extends T ? Readonly<S> : S;

import { Increment, UnknownArray } from "../utility";

export type FirstFew<T extends UnknownArray, N extends number = 0, R extends UnknownArray = [], I extends number = 0> = I extends N
    ? R
    : T[I] extends undefined
    ? R
    : FirstFew<T, N, [...R, T[I]], Increment[I]>;
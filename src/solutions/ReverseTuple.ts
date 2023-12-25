import { RetainMutablity, UnknownArray } from "../utility";

export type ReverseTuple<A, R extends UnknownArray = []> = A extends readonly [infer First, ...infer Rest]
    ? ReverseTuple<RetainMutablity<Rest, A>, [First, ...R]>
    : RetainMutablity<R, A>;
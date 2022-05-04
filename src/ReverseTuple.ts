/**
 * id: 1
 * name: ReverseTuple
 * difficulty: 2
 * description: Reverse a tuple or readonly tuple, while maintaining mutability of the tuple.
 * extra: Transpose a matrix or tuple of tuples.
 * tags: fundamentals, tuples
 * related: MergeSort
 */

import { Assert, Equals } from "./common";
import { RetainMutablity, UnknownArray } from "./utility";

type ReverseTuple<A, R extends UnknownArray = []> = A extends readonly [infer First, ...infer Rest]
    ? ReverseTuple<RetainMutablity<Rest, A>, [First, ...R]>
    : RetainMutablity<R, A>;

type T01 = Assert<Equals<ReverseTuple<[1, 2, 3]>, [3, 2, 1]>>;
type T02 = Assert<Equals<ReverseTuple<[3, 2, 1]>, [1, 2, 3]>>;
type T03 = Assert<Equals<ReverseTuple<readonly [1, 2, 3]>, readonly [3, 2, 1]>>;
type T04 = Assert<Equals<ReverseTuple<readonly [1, 2, 3]>, readonly [3, 2, 1]>>;

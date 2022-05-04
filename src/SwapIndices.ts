/**
 * id: 13
 * name: SwapIndices
 * difficulty: 2
 * description: Swap two elements of a tuple.
 * extra: Remove all even indexed elements of a tuple.
 * tags: tuples, logic
 * related: ReverseTuple
 */

import { Assert, Equals } from "./common";
import { UnknownArray } from "./utility";

type SwapIndices<A extends UnknownArray, T extends number, S extends number> = {
    [K in keyof A]: `${T}` extends K ? A[S] : `${S}` extends K ? A[T] : A[K];
};

type T01 = Assert<Equals<SwapIndices<[1, 2, 3], 0, 2>, [3, 2, 1]>>;
type T02 = Assert<Equals<SwapIndices<[1, 2, 3], 0, 1>, [2, 1, 3]>>;
type T03 = Assert<Equals<SwapIndices<[1, 2, 3], 2, 0>, [3, 2, 1]>>;
type T04 = Assert<Equals<SwapIndices<[1, 2, 3], 2, 1>, [1, 3, 2]>>;

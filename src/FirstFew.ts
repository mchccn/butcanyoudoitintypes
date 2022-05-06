/**
 * id: 15
 * name: FirstFew
 * difficulty: 3
 * description: Get the first few elements of a tuple.
 * extra: Make the resulting tuple retain the mutability of the original.
 * tags: tuples, logic
 * related: Reverse
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { Increment, UnknownArray } from "./utility";

type FirstFew<T extends UnknownArray, N extends number = 0, R extends UnknownArray = [], I extends number = 0> = I extends N
    ? R
    : T[I] extends undefined
    ? R
    : FirstFew<T, N, [...R, T[I]], Increment[I]>;

type T01 = Assert<Equals<FirstFew<[1, 2, 3, 4, 5], 3>, [1, 2, 3]>>;
type T02 = Assert<Equals<FirstFew<[], 0>, []>>;
type T03 = Assert<Equals<FirstFew<[], 1>, []>>;
type T04 = Assert<Equals<FirstFew<[1, 2, 3, 4, 5], 1>, [1]>>;

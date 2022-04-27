/**
 * id: 1
 * name: Reverse
 * difficulty: 2
 * description: Reverse a tuple or readonly tuple, while maintaining mutability of the tuple.
 */

import { Assert, RetainMutablity, UnknownArray } from "./common";

type Reverse<A, R extends UnknownArray = []> = A extends readonly [infer First, ...infer Rest]
    ? Reverse<RetainMutablity<Rest, A>, [First, ...R]>
    : RetainMutablity<R, A>;

type T01 = Assert<Reverse<[1, 2, 3]>, [3, 2, 1]>;
type T02 = Assert<Reverse<[3, 2, 1]>, [1, 2, 3]>;
type T03 = Assert<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>;
type T04 = Assert<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>;

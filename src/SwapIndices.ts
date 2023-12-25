/**
 * id: 13
 * name: SwapIndices
 * difficulty: 2
 * description: Swap two elements of a tuple.
 * extra: Remove all even indexed elements of a tuple.
 * tags: tuples, logic
 * related: ReverseTuple
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { SwapIndices } from "./solutions/SwapIndices";

type T01 = Assert<Equals<SwapIndices<[1, 2, 3], 0, 2>, [3, 2, 1]>>;
type T02 = Assert<Equals<SwapIndices<[1, 2, 3], 0, 1>, [2, 1, 3]>>;
type T03 = Assert<Equals<SwapIndices<[1, 2, 3], 2, 0>, [3, 2, 1]>>;
type T04 = Assert<Equals<SwapIndices<[1, 2, 3], 2, 1>, [1, 3, 2]>>;

/**
 * id: 9
 * name: MergeSort
 * difficulty: 5
 * description: Implement the merge sort algorithm.
 * extra: Implement a different sorting algorithm.
 * tags: tuples, algorithms
 * related: Halves
 *
 * @format
 */

import { Assert, Equals, Unreadonly } from "./common";
import { MergeSort } from "./solutions/MergeSort";

type T01 = Assert<Equals<Unreadonly<MergeSort<[1, 2, 3]>>, [1, 2, 3]>>;
type T02 = Assert<Equals<Unreadonly<MergeSort<[1, 2, 3, 4, 5]>>, [1, 2, 3, 4, 5]>>;
type T03 = Assert<Equals<Unreadonly<MergeSort<[3, 2, 1]>>, [1, 2, 3]>>;
type T04 = Assert<Equals<Unreadonly<MergeSort<[5, 4, 3, 2, 1]>>, [1, 2, 3, 4, 5]>>;

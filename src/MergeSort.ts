/**
 * id: 9
 * name: MergeSort
 * difficulty: 5
 * description: Implement the merge sort algorithm.
 */

import { Assert, Unreadonly } from "./common";
import { Decrement } from "./utility";

type GreaterThan<A extends number, B extends number> = A extends B ? false : B extends 0 ? true : A extends 0 ? false : GreaterThan<Decrement[A], Decrement[B]>;

type Merge<
    Left extends ReadonlyArray<unknown>,
    Right extends ReadonlyArray<unknown>,
    Result extends ReadonlyArray<unknown> = readonly []
> = Left extends readonly []
    ? readonly [...Result, ...Right]
    : Right extends readonly []
    ? readonly [...Result, ...Left]
    : Left extends readonly [infer LFirst, ...infer LRest]
    ? Right extends readonly [infer RFirst, ...infer RRest]
        ? RFirst extends number
            ? LFirst extends number
                ? GreaterThan<RFirst, LFirst> extends true
                    ? Merge<LRest, Right, readonly [...Result, LFirst]>
                    : Merge<Left, RRest, readonly [...Result, RFirst]>
                : never
            : never
        : never
    : never;

type Halves<
    Target extends ReadonlyArray<unknown>,
    Left extends ReadonlyArray<unknown> = readonly [],
    Right extends ReadonlyArray<unknown> = readonly []
> = `${Target["length"]}` extends `${string}${"1" | "3" | "5" | "7" | "9"}`
    ? Target extends readonly [...infer Rest, infer Last]
        ? Halves<Rest, readonly [], readonly [Last]>
        : never
    : Target extends readonly []
    ? readonly [Left, Right]
    : Target extends readonly [infer LFirst, ...infer Rest, infer RFirst]
    ? Halves<Rest, readonly [...Left, LFirst], readonly [RFirst, ...Right]>
    : never;

type MergeSort<M extends ReadonlyArray<unknown>> = M extends readonly [] | readonly [unknown]
    ? M
    : Halves<M> extends readonly [infer Left, infer Right]
    ? Left extends ReadonlyArray<unknown>
        ? Right extends ReadonlyArray<unknown>
            ? Merge<MergeSort<Left>, MergeSort<Right>>
            : never
        : never
    : never;

type T01 = Assert<Unreadonly<MergeSort<[1, 2, 3]>>, [1, 2, 3]>;
type T02 = Assert<Unreadonly<MergeSort<[1, 2, 3, 4, 5]>>, [1, 2, 3, 4, 5]>;
type T03 = Assert<Unreadonly<MergeSort<[3, 2, 1]>>, [1, 2, 3]>;
type T04 = Assert<Unreadonly<MergeSort<[5, 4, 3, 2, 1]>>, [1, 2, 3, 4, 5]>;

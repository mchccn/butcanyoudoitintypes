/**
 * id: 3
 * name: MiddleCharacter
 * difficulty: 4
 * description: Get the middle character of a string (middle two if length is even).
 */

import { Assert } from "./common";
import { UnknownArray } from "./utility";

type Split<S extends string, R extends UnknownArray = readonly []> = S extends `${infer C}${infer M}` ? Split<M, readonly [...R, C]> : R;

type IsOdd<N extends number> = `${N}` extends `${string}${"1" | "3" | "5" | "7" | "9"}` ? true : false;

type Halves<
    Target extends ReadonlyArray<unknown>,
    Left extends ReadonlyArray<unknown> = readonly [],
    Right extends ReadonlyArray<unknown> = readonly []
> = IsOdd<Target["length"]> extends true
    ? Target extends readonly [...infer Rest, infer Last]
        ? Halves<Rest, readonly [], readonly [Last]>
        : never
    : Target extends readonly []
    ? readonly [Left, Right]
    : Target extends readonly [infer LFirst, ...infer Rest, infer RFirst]
    ? Halves<Rest, readonly [...Left, LFirst], readonly [RFirst, ...Right]>
    : never;

type MiddleCharacter<S extends string> = IsOdd<Split<S>["length"]> extends true
    ? Halves<Split<S>> extends readonly [unknown, readonly [infer C, ...unknown[]]]
        ? C
        : never
    : Halves<Split<S>> extends readonly [readonly [...unknown[], infer A], readonly [infer B, ...unknown[]]]
    ? A extends string
        ? B extends string
            ? `${A}${B}`
            : never
        : never
    : "";

type T01 = Assert<MiddleCharacter<"challenge">, "l">;
type T02 = Assert<MiddleCharacter<"challenger">, "le">;
type T03 = Assert<MiddleCharacter<" ">, " ">;
type T04 = Assert<MiddleCharacter<"">, "">;

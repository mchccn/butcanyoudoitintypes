/**
 * id: 14
 * name: SplitString
 * difficulty: 2
 * description: Split a string into a tuple.
 * extra: Optionally handle a separator and split the string by the given separator.
 * tags: tuples, strings
 * related: IncludesString, DeleteCharacter
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { UnknownArray } from "./utility";

type SplitString<S extends string, R extends UnknownArray = []> = S extends `${infer C}${infer M}` ? SplitString<M, [...R, C]> : R;

type T01 = Assert<Equals<SplitString<"hi!">, ["h", "i", "!"]>>;
type T02 = Assert<Equals<SplitString<"">, []>>;
type T03 = Assert<Equals<SplitString<"hello world">, ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]>>;
type T04 = Assert<Equals<SplitString<"_">, ["_"]>>;

/**
 * id: 2
 * name: DeleteCharacter
 * difficulty: 3
 * description: Remove all occurrences of a character from a string.
 * extra: Make it work for deleting multiple characters using a union.
 * tags: strings
 * related: ReplaceCharacter
 *
 * @format
 */

import { Assert, Equals } from "./common";

type DeleteCharacter<S extends string, C extends string> = S extends `${infer A}${C}${infer B}` ? DeleteCharacter<`${A}${B}`, C> : S;

type T01 = Assert<Equals<DeleteCharacter<"hello world", "o">, "hell wrld">>;
type T02 = Assert<Equals<DeleteCharacter<"hate this challenge", "h">, "ate tis callenge">>;
type T03 = Assert<Equals<DeleteCharacter<"delete character", "e">, "dlt charactr">>;
type T04 = Assert<Equals<DeleteCharacter<"replace with nothing", " ">, "replacewithnothing">>;

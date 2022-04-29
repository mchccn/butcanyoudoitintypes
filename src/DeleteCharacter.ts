/**
 * id: 2
 * name: DeleteCharacter
 * difficulty: 3
 * description: Remove all occurrences of a character from a string.
 */

import { Assert } from "./common";

type DeleteCharacter<S extends string, C extends string> = S extends `${infer A}${C}${infer B}` ? DeleteCharacter<`${A}${B}`, C> : S;

type T01 = Assert<DeleteCharacter<"hello world", "o">, "hell wrld">;
type T02 = Assert<DeleteCharacter<"hate this challenge", "h">, "ate tis callenge">;
type T03 = Assert<DeleteCharacter<"delete character", "e">, "dlt charactr">;
type T04 = Assert<DeleteCharacter<"replace with nothing", " ">, "replacewithnothing">;

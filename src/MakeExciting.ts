/**
 * id: 7
 * name: MakeExciting
 * difficulty: 0
 * description: Append '!' to a string.
 * extra: Concatenate two string literal types.
 * tags: fundamentals, strings
 * related: DeleteCharacter, IncludesString
 *
 * @format
 */

import { Assert, Equals } from "./common";

type MakeExciting<S extends string> = `${S}!`;

type T01 = Assert<Equals<MakeExciting<"hello world">, "hello world!">>;
type T02 = Assert<Equals<MakeExciting<"">, "!">>;
type T03 = Assert<Equals<MakeExciting<"!">, "!!">>;
type T04 = Assert<Equals<MakeExciting<"i love this challenge">, "i love this challenge!">>;

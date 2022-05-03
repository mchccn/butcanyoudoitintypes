/**
 * id: 7
 * name: MakeExciting
 * difficulty: 0
 * description: Append '!' to a string.
 * extra: Concatenate two string literal types.
 * tags: fundamentals, strings
 * related: DeleteCharacter, IncludesString
 */

import { Assert } from "./common";

type MakeExciting<S extends string> = `${S}!`;

type T01 = Assert<MakeExciting<"hello world">, "hello world!">;
type T02 = Assert<MakeExciting<"">, "!">;
type T03 = Assert<MakeExciting<"!">, "!!">;
type T04 = Assert<MakeExciting<"i love this challenge">, "i love this challenge!">;

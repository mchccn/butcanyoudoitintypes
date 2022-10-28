/**
 * id: 4
 * name: IncludesString
 * difficulty: 2
 * description: Check whether or not a substring is present in another string.
 * extra: Make it work for checking multiple strings at once as a union.
 * tags: strings
 * related: DeleteCharacter
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { IncludesString } from "./solutions/IncludesString";

type T01 = Assert<Equals<IncludesString<"a long string for testing", "string" | "for">, true>>;
type T02 = Assert<Equals<IncludesString<"a long string for testing", "ing">, true>>;
type T03 = Assert<Equals<IncludesString<"a long string for testing", "ding">, false>>;
type T04 = Assert<Equals<IncludesString<"a long string for testing", "z">, false>>;

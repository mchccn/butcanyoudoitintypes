/**
 * id: 4
 * name: IncludesString
 * difficulty: 2
 * description: Check whether or not a substring is present in another string.
 */

import { Assert } from "./common";

type IncludesString<S extends string, C extends string> = S extends `${string}${C}${string}` ? true : false;

type T01 = Assert<IncludesString<"a long string for testing", "string">, true>;
type T02 = Assert<IncludesString<"a long string for testing", "ing">, true>;
type T03 = Assert<IncludesString<"a long string for testing", "ding">, false>;
type T04 = Assert<IncludesString<"a long string for testing", "z">, false>;

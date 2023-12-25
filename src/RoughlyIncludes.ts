/**
 * id: 16
 * name: RoughlyIncludes
 * difficulty: 4
 * description: Check whether a string has all the characters of the target string in order.
 * extra: Breaks in sequences of letters invalidate the inclusion.
 * tags: strings, logic
 * related: IncludesString
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { RoughlyIncludes } from "./solutions/RoughlyIncludes";

type T01 = Assert<Equals<RoughlyIncludes<"hhhhhhheeeeelllllllllllooooo", "hello">, true>>;
type T02 = Assert<Equals<RoughlyIncludes<"hhhhhhhlllllllllllooooo", "hello">, false>>;
type T03 = Assert<Equals<RoughlyIncludes<"hello", "hello">, true>>;
type T04 = Assert<Equals<RoughlyIncludes<"", "hello">, false>>;

/**
 * id: 5
 * name: IsNotNumberLiteral
 * difficulty: 1
 * description: Determine whether or not the passed type is a number literal.
 * extra: Check if the passed type is a string literal.
 * tags: fundamentals, numbers
 * related: IsEven, IsNever
 *
 * @format
 */

import { Assert, Equals } from "./common";

type IsNotNumberLiteral<T> = T extends number ? (0 extends T ? (1 extends T ? false : true) : true) : never;

type T01 = Assert<Equals<IsNotNumberLiteral<number>, false>>;
type T02 = Assert<Equals<IsNotNumberLiteral<string>, never>>;
type T03 = Assert<Equals<IsNotNumberLiteral<0 | 1>, true>>;
type T04 = Assert<Equals<IsNotNumberLiteral<42>, true>>;

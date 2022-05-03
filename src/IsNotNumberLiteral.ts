/**
 * id: 5
 * name: IsNotNumberLiteral
 * difficulty: 1
 * description: Determine whether or not the passed type is a number literal.
 */

import { Assert } from "./common";

type IsNotNumberLiteral<T> = T extends number ? (0 extends T ? (1 extends T ? false : true) : true) : never;

type T01 = Assert<IsNotNumberLiteral<number>, false>;
type T02 = Assert<IsNotNumberLiteral<string>, never>;
type T03 = Assert<IsNotNumberLiteral<0 | 1>, true>;
type T04 = Assert<IsNotNumberLiteral<42>, true>;

/**
 * id: 6
 * name: IsNever
 * difficulty: 1
 * description: Check if the passed type is never.
 * extra: Check if the passed type is any.
 * tags: fundamentals
 * related: IsEven, IsNotNumberLiteral
 */

import { Assert, Equals } from "./common";

type IsNever<T> = [T] extends [never] ? true : false;

type T01 = Assert<Equals<IsNever<void>, false>>;
type T02 = Assert<Equals<IsNever<unknown>, false>>;
type T03 = Assert<Equals<IsNever<any>, false>>;
type T04 = Assert<Equals<IsNever<never>, true>>;

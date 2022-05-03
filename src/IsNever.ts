/**
 * id: 6
 * name: IsNever
 * difficulty: 1
 * description: Check if the passed type is never.
 * extra: Check if the passed type is any.
 * tags: fundamentals
 * related: IsEven, IsNotNumberLiteral
 */

import { Assert } from "./common";

type IsNever<T> = [T] extends [never] ? true : false;

type T01 = Assert<IsNever<void>, false>;
type T02 = Assert<IsNever<unknown>, false>;
type T03 = Assert<IsNever<any>, false>;
type T04 = Assert<IsNever<never>, true>;

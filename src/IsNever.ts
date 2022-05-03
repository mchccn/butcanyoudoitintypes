/**
 * id: 6
 * name: IsNever
 * difficulty: 1
 * description: Check if the passed type is never.
 */

import { Assert } from "./common";

type IsNever<T> = [T] extends [never] ? true : false;

type T01 = Assert<IsNever<void>, false>;
type T02 = Assert<IsNever<unknown>, false>;
type T03 = Assert<IsNever<any>, false>;
type T04 = Assert<IsNever<never>, true>;

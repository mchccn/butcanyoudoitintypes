/**
 * id: 11
 * name: IsEven
 * difficulty: 2
 * description: Determine if the passed number is even.
 * extra: Return never if the passed type is the generic number type.
 * tags: fundamentals, numbers
 * related: IsNotNumberLiteral
 */

import { Assert, Equals } from "./common";

type IsEven<N extends number> = `${N}` extends `${string}${"0" | "2" | "4" | "6" | "8"}` ? true : false;

type T01 = Assert<Equals<IsEven<0>, true>>;
type T02 = Assert<Equals<IsEven<42>, true>>;
type T03 = Assert<Equals<IsEven<69>, false>>;
type T04 = Assert<Equals<IsEven<1>, false>>;

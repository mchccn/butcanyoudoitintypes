/**
 * id: 12
 * name: EachAsSingle
 * difficulty: 3
 * description: Given a union, make a union of each member in the original wrapped in an object.
 * extra: Do the reverse of this challenge.
 * tags: fundamentals, unions
 * related: UnionToIntersection
 *
 * @format
 */

import { Assert, Equals, Never } from "./common";
import { EachAsSingle } from "./solutions/EachAsSingle";

type T01 = Assert<
    Equals<
        EachAsSingle<"one" | "two" | "three">,
        | {
              wrapped: "one";
          }
        | {
              wrapped: "two";
          }
        | {
              wrapped: "three";
          }
    >
>;
type T02 = Assert<Equals<EachAsSingle<"">, { wrapped: "" }>>;
type T03 = Assert<
    Equals<
        EachAsSingle<1 | 2 | 3>,
        | {
              wrapped: 1;
          }
        | {
              wrapped: 2;
          }
        | {
              wrapped: 3;
          }
    >
>;
type T04 = Assert<Equals<Never<EachAsSingle<never>>, true>>;

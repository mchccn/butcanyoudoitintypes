/**
 * id: 10
 * name: NoOverlappingKeys
 * difficulty: 3
 * description: If the two types have conflicting keys, output never, otherwise output the intersection of them.
 * extra: Output the difference of the two types if they have conflicting keys.
 * tags: fundamentals, utility
 * related: DeepOverlappingKeys
 *
 * @format
 */

import { Assert, Equals, Never } from "./common";
import { NoOverlappingKeys } from "./solutions/NoOverlappingKeys";

type T01 = Assert<Equals<NoOverlappingKeys<{}, {}>, {}>>;
type T02 = Assert<Equals<Never<NoOverlappingKeys<{ foo: number }, { foo: string }>>, true>>;
type T03 = Assert<Equals<NoOverlappingKeys<{}, {}>, {}>>;
type T04 = Assert<Equals<NoOverlappingKeys<{}, {}>, {}>>;

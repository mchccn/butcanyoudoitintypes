/**
 * id: 10
 * name: NoOverlappingKeys
 * difficulty: 3
 * description: If the two types have conflicting keys, output never, otherwise output the intersection of them.
 * extra: Output the difference of the two types if they have conflicting keys.
 * tags: fundamentals, utility
 * related: DeepOverlappingKeys
 */

import { Assert, Never } from "./common";

type NoOverlappingKeys<A, B> = [
    {
        [K in keyof A]: K extends keyof B ? true : never;
    }[keyof A]
] extends [never]
    ? A & B
    : never;

type T01 = Assert<NoOverlappingKeys<{}, {}>, {}>;
type T02 = Assert<Never<NoOverlappingKeys<{ foo: number }, { foo: string }>>, true>;
type T03 = Assert<NoOverlappingKeys<{}, {}>, {}>;
type T04 = Assert<NoOverlappingKeys<{}, {}>, {}>;

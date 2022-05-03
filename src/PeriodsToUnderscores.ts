/**
 * id: 8
 * name: PeriodsToUnderscores
 * difficulty: 3
 * description: Change all periods to underscores in a string.
 * extra: Create a type that transforms camel case strings to snake case.
 * tags: strings
 * related: IncludesString
 */

import { Assert } from "./common";

type PeriodsToUnderscores<S extends string> = S extends `${infer A}.${infer B}` ? `${A}_${PeriodsToUnderscores<B>}` : S;

type T01 = Assert<PeriodsToUnderscores<"a.b.c">, "a_b_c">;
type T02 = Assert<PeriodsToUnderscores<"">, "">;
type T03 = Assert<PeriodsToUnderscores<"...">, "___">;
type T04 = Assert<PeriodsToUnderscores<".foo.bar.baz.">, "_foo_bar_baz_">;

/**
 * id: 3
 * name: MiddleCharacter
 * difficulty: 4
 * description: Get the middle character of a string (middle two if length is even).
 * extra: Return string with the middle characters removed.
 * tags: strings, logic
 * related: IncludesString, Halves
 *
 * @format
 */

import { Assert, Equals } from "./common";
import { MiddleCharacter } from "./solutions/MiddleCharacter";

type T01 = Assert<Equals<MiddleCharacter<"challenge">, "l">>;
type T02 = Assert<Equals<MiddleCharacter<"challenger">, "le">>;
type T03 = Assert<Equals<MiddleCharacter<" ">, " ">>;
type T04 = Assert<Equals<MiddleCharacter<"">, "">>;

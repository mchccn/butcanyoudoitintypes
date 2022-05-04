/** @format */

import { Primitive } from "../utility/Primitive";

export type Unreadonly<T> = T extends Primitive ? T : { -readonly [K in keyof T]: Unreadonly<T[K]> };

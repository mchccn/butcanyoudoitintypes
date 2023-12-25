import { UnknownArray } from "../utility";

export type SplitString<S extends string, R extends UnknownArray = []> = S extends `${infer C}${infer M}` ? SplitString<M, [...R, C]> : R;
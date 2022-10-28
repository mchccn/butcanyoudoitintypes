import { UnknownArray } from "../utility";

export type SwapIndices<A extends UnknownArray, T extends number, S extends number> = {
    [K in keyof A]: `${T}` extends K ? A[S] : `${S}` extends K ? A[T] : A[K];
};
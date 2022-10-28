type MakeMatcher<S extends string, R extends string = `${string}`> = S extends `${infer C}${infer M}` ? MakeMatcher<M, `${R}${C}${string}`> : R;

export type RoughlyIncludes<Source extends string, Target extends string> = Source extends MakeMatcher<Target> ? true : false;
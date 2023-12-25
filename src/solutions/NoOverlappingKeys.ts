export type NoOverlappingKeys<A, B> = [
    {
        [K in keyof A]: K extends keyof B ? true : never;
    }[keyof A]
] extends [never]
    ? A & B
    : never;
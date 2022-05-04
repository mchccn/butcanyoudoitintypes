export type Equals<A, B> = (<T>() => T extends A ? true : false) extends <T>() => T extends B ? true : false ? true : false;

export type Expand<T> = T extends object ? { [K in keyof T]: Expand<T[K]> } : T;

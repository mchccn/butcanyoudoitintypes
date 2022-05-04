/** @format */

interface Challenge {
    id: number;
    name: string;
    difficulty: number;
    description: string;
    extra: string;
    tags: string[];
    related: string[];
}

export function getData(): Promise<Challenge[]> {
    return fetch("./data.json").then((res) => res.json());
}

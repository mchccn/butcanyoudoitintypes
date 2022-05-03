import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

writeFileSync(
    join(__dirname, "..", "..", "docs", "data.json"),
    JSON.stringify(
        readdirSync(join(__dirname, ".."), { withFileTypes: true })
            .filter((d) => d.isFile() && d.name.endsWith(".ts"))
            .map(({ name }) => readFileSync(join(__dirname, "..", name), "utf8"))
            .sort((a, b) => +a.match(/id: (\d+)/)![1] - +b.match(/id: (\d+)/)![1])
            .map((file) => ({
                id: file.match(/id: (\d+)/)![1],
                name: file.match(/name: (.+)\n/)![1],
                difficulty: +file.match(/difficulty: (\d+)/)![1],
                description: file.match(/description: (.+)\n/)![1],
                extra: file.match(/extra: (.+)\n/)![1],
                tags: file.match(/tags: (.+)\n/)![1].split(", "),
                related: file.match(/related: (.+)\n/)![1].split(", "),
            })),
        undefined,
        4
    ),
    "utf8"
);

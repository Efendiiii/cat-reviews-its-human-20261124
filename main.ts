// Cat Reviews Its Human — make.fun one-liner entry.
// Writes one single-line one-star review from a house cat about its
// human to /output/entry.txt. Gate: 1-200 UTF-8 characters, not only
// whitespace, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. The food is on time, but my human stares at a glowing rectangle for eight hours and calls it work. I have filed a complaint with the rug.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length} chars to /output/entry.txt`);

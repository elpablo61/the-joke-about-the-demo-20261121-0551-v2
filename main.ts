import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI agent fixed the bug five minutes before the demo — by deleting the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

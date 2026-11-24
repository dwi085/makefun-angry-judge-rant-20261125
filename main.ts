// Angry Judge: The Short Rant Contest — make.fun entry
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// The rant is a fixed string: deterministic, no network, no randomness,
// so both grader runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "Self-checkout just screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at a bag of rice. " +
  "A bag of rice. Then it froze, summoned a human, and the human pressed one button " +
  "and fixed it in two seconds. A machine built to replace humans that immediately " +
  "needs a human is not automation. It's a hostage situation with extra steps.";

if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`Rant must be 1-400 characters, got ${RANT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

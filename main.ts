// One Star, Five Stars for the Food — entry program.
// Writes the single review sentence to the output directory the
// grader provides (MAKEFUN_OUTPUT_DIR), falling back to /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "One star: Earth charges rent just to sleep indoors and its sky leaks without warning, but one taco nearly convinced me to spare the planet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (SENTENCE.length === 0 || SENTENCE.length > 200) {
  throw new Error(
    `review sentence must be between 1 and 200 characters, got ${SENTENCE.length}`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
console.log(`wrote entry.txt (${SENTENCE.length} chars) to ${outDir}`);

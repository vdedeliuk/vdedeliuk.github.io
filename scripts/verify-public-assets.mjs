import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const source = readFileSync(resolve("src/data/translations/en.ts"), "utf8");
const imagePaths = [
  ...new Set(
    [...source.matchAll(/image:\s*["'](\/images\/portfolio\/[^"']+\.webp)["']/g)].map(
      ([, imagePath]) => imagePath,
    ),
  ),
];

const variants = [
  ".webp",
  "-480.webp",
  "-800.webp",
  "-480.avif",
  "-800.avif",
  "-1200.avif",
  "-placeholder.webp",
];

const missing = [];

for (const imagePath of imagePaths) {
  const basePath = imagePath.replace(/\.webp$/, "");

  for (const variant of variants) {
    const relativePath = `${basePath}${variant}`;

    for (const root of ["public", "dist"]) {
      const filePath = resolve(root, relativePath.replace(/^\//, ""));
      if (!existsSync(filePath)) missing.push(`${root}${relativePath}`);
    }
  }
}

if (missing.length > 0) {
  console.error("Portfolio deployment is missing required image assets:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Verified ${imagePaths.length * variants.length} portfolio image assets in public and dist.`);

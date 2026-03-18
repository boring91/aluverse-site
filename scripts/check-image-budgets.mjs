import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist/client/_astro");

const imageBudgets = {
    hero: 500 * 1024,
    card: 180 * 1024,
    secondary: 250 * 1024,
};

const formatBytes = sizeInBytes =>
    `${(sizeInBytes / 1024).toFixed(1).replace(/\\.0$/, "")} KB`;

const classifyImage = fileName => {
    if (fileName.includes("workshop-photo")) {
        return "secondary";
    }

    if (fileName.includes("-card.")) {
        return "card";
    }

    if (fileName.includes("-hero.")) {
        return "hero";
    }

    return null;
};

const files = await readdir(distDir);
const failures = [];

for (const fileName of files) {
    if (!fileName.endsWith(".avif") && !fileName.endsWith(".webp")) {
        continue;
    }

    const imageType = classifyImage(fileName);

    if (!imageType) {
        continue;
    }

    const filePath = path.join(distDir, fileName);
    const fileStat = await stat(filePath);
    const budget = imageBudgets[imageType];

    if (fileStat.size > budget) {
        failures.push({
            fileName,
            imageType,
            size: fileStat.size,
            budget,
        });
    }
}

if (failures.length > 0) {
    console.error("Image budget check failed:");

    for (const failure of failures.sort(
        (left, right) => right.size - left.size
    )) {
        console.error(
            `- ${failure.fileName} (${failure.imageType}) ${formatBytes(
                failure.size
            )} > ${formatBytes(failure.budget)}`
        );
    }

    process.exit(1);
}

console.log("Image budget check passed.");

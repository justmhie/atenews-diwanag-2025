import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadArtworksData() {
  const artworksJsonPath = path.join(
    __dirname,
    "..",
    "public",
    "data",
    "artworks.json"
  );

  if (!fs.existsSync(artworksJsonPath)) {
    throw new Error("artworks.json not found at " + artworksJsonPath);
  }

  const data = fs.readFileSync(artworksJsonPath, "utf8");
  return JSON.parse(data);
}

function buildRenameMap(artworksData) {
  const renameMap = {
    "chap-1-photos": {},
    "chap-2-photos": {},
    "chap-3-photos": {},
    "chap-4-photos": {},
    "chap-5-photos": {},
    "chap-6-photos": {},
  };

  artworksData.forEach((artwork) => {
    const chapterNum = artwork.chapter.replace("Chapter ", "");
    const folderName = `chap-${chapterNum}-photos`;
    const expectedFilename = artwork["art-image"];

    if (expectedFilename && renameMap[folderName]) {
      renameMap[folderName][expectedFilename] = expectedFilename;
    }
  });

  return renameMap;
}

function normalizeForComparison(filename) {
  return filename
    .toLowerCase()
    .replace(/\.(png|jpg|jpeg|tiff|gif)$/i, "")
    .replace(/[\s_-]+/g, "")
    .replace(/['"]/g, "");
}

function findMatchingFiles(folderPath, expectedFilenames) {
  const matches = {};

  if (!fs.existsSync(folderPath)) {
    return matches;
  }

  const existingFiles = fs.readdirSync(folderPath);

  expectedFilenames.forEach((expectedFile) => {
    if (existingFiles.includes(expectedFile)) {
      matches[expectedFile] = expectedFile;
      return;
    }

    const expectedNorm = normalizeForComparison(expectedFile);
    const expectedExt = path.extname(expectedFile);

    const match = existingFiles.find((existingFile) => {
      const existingNorm = normalizeForComparison(existingFile);
      const existingExt = path.extname(existingFile);

      if (expectedExt && existingExt !== expectedExt) {
        return false;
      }

      return (
        existingNorm === expectedNorm ||
        existingNorm.includes(expectedNorm) ||
        expectedNorm.includes(existingNorm)
      );
    });

    if (match && match !== expectedFile) {
      matches[match] = expectedFile;
    }
  });

  return matches;
}

function renameArtworks() {
  const artworksDir = path.join(__dirname, "..", "public", "artworks");
  const artworksData = loadArtworksData();
  const expectedMap = buildRenameMap(artworksData);

  let totalRenamed = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  let totalNotFound = 0;

  for (const [folder, expectedFiles] of Object.entries(expectedMap)) {
    const folderPath = path.join(artworksDir, folder);

    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️  Folder not found: ${folder}`);
      continue;
    }

    console.log(`\n📁 Processing ${folder}...`);

    const expectedFilenames = Object.keys(expectedFiles).filter((f) => f);

    if (expectedFilenames.length === 0) {
      console.log(`  ℹ️  No files expected in this folder`);
      continue;
    }

    const matches = findMatchingFiles(folderPath, expectedFilenames);

    for (const [oldName, newName] of Object.entries(matches)) {
      const oldPath = path.join(folderPath, oldName);
      const newPath = path.join(folderPath, newName);

      if (oldName === newName) {
        console.log(`  ⏭️  Skipped (already correct): ${oldName}`);
        totalSkipped++;
        continue;
      }

      try {
        fs.renameSync(oldPath, newPath);
        console.log(`  ✅ Renamed: ${oldName} → ${newName}`);
        totalRenamed++;
      } catch (error) {
        console.log(`  ❌ Error renaming ${oldName}: ${error.message}`);
        totalErrors++;
      }
    }

    const matchedOldNames = Object.keys(matches);
    const notFound = expectedFilenames.filter(
      (expected) => !matchedOldNames.some((old) => matches[old] === expected)
    );

    notFound.forEach((filename) => {
      console.log(`  ⚠️  Not found: ${filename}`);
      totalNotFound++;
    });
  }

  console.log("\n" + "=".repeat(60));
  console.log(`📊 Summary:`);
  console.log(`   ✅ Renamed: ${totalRenamed} files`);
  console.log(`   ⏭️  Skipped: ${totalSkipped} files`);
  console.log(`   ⚠️  Not found: ${totalNotFound} files`);
  console.log(`   ❌ Errors: ${totalErrors} files`);
  console.log("=".repeat(60));
}

console.log("🚀 Starting artwork renaming process...");
renameArtworks();
console.log("\n✨ Done!");

// To run this script:
// cd diwanag-2025-app
// node scripts/rename-artworks.js

import fs from "fs";
import path from "path";

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

const publicDir = path.join(process.cwd(), "public");

fs.readdirSync(publicDir).forEach((file) => {
  const oldPath = path.join(publicDir, file);
  if (fs.lstatSync(oldPath).isFile()) {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const kebab = toKebabCase(base) + ext.toLowerCase();
    if (file !== kebab) {
      const newPath = path.join(publicDir, kebab);
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${kebab}`);
    }
  }
});

// to run cd diwanag-2025-app
// then run "node scripts/rename-public-to-kebab.js"

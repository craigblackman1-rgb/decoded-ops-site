import fs from 'fs';
import path from 'path';

const SKIP_DIRS = ['node_modules', '.next', '.context', 'scripts', 'public'];

function replaceExtensionsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace .jpg, .jpeg, .png with .webp in image paths
  // Only matches paths that contain /images/ or start with /images/
  content = content.replace(/(\/images\/[^\s"'<>]+\.)jpg/gi, '$1webp');
  content = content.replace(/(\/images\/[^\s"'<>]+\.)jpeg/gi, '$1webp');
  content = content.replace(/(\/images\/[^\s"'<>]+\.)png/gi, '$1webp');

  // Also handle relative paths like "./images/..." or "images/..."
  content = content.replace(/(\.\/images\/[^\s"'<>]+\.)jpg/gi, '$1webp');
  content = content.replace(/(\.\/images\/[^\s"'<>]+\.)jpeg/gi, '$1webp');
  content = content.replace(/(\.\/images\/[^\s"'<>]+\.)png/gi, '$1webp');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) {
        files.push(...walkDir(path.join(dir, entry.name)));
      }
    } else if (/\.(ts|tsx|js|jsx|css|html|mdx?)$/i.test(entry.name)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

let fixedCount = 0;
const files = walkDir('.');
for (const file of files) {
  if (replaceExtensionsInFile(file)) {
    console.log(`Replaced: ${file}`);
    fixedCount++;
  }
}
console.log(`\nReplaced image extensions in ${fixedCount} files`);

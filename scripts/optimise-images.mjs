import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public/images');

async function optimise() {
  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(full);
    }
  }
  walk(IMAGES_DIR);

  const table = [];
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const webpPath = file.replace(/\.(jpe?g|png)$/i, '.webp');
    if (fs.existsSync(webpPath)) continue;

    const meta = await sharp(file).metadata();
    const w = meta.width || 0;
    const h = meta.height || 0;
    const targetW = Math.min(w, 1600);
    const resizeOpts = w > 1600 ? { width: 1600 } : {};

    await sharp(file).resize(resizeOpts).webp({ quality: 78 }).toFile(webpPath);

    const rel = path.relative(IMAGES_DIR, file).replace(/\\/g, '/');
    const relWebp = path.relative(IMAGES_DIR, webpPath).replace(/\\/g, '/');
    table.push({ original: rel, webp: relWebp, width: w, height: h, resized: w > 1600 });
    console.log(`Created: ${relWebp} (from ${w}x${h}${w > 1600 ? ', resized to 1600w' : ''})`);
  }

  console.log(`\nProcessed ${table.length} images (${files.length} total files found)`);
  if (table.length > 0) {
    console.log('\nDimensions:');
    console.table(table);
  }
}

optimise().catch(console.error);

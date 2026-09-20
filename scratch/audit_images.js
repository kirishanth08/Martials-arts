const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const imgUsages = {};

for (const h of htmlFiles) {
  const content = fs.readFileSync(h, 'utf8');
  const regex = /(?:src|poster)=["']([^"']*assets\/images\/[^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const clean = match[1].replace(/^\.\.\//, '').replace(/^\.\//, '').split('?')[0].trim();
    if (!imgUsages[clean]) imgUsages[clean] = [];
    imgUsages[clean].push(h);
  }
  const bgRegex = /url\(["']?([^"')]+assets\/images\/[^"']+)["']?\)/g;
  while ((match = bgRegex.exec(content)) !== null) {
    const clean = match[1].replace(/^\.\.\//, '').replace(/^\.\//, '').split('?')[0].trim();
    if (!imgUsages[clean]) imgUsages[clean] = [];
    imgUsages[clean].push(h);
  }
}

console.log('Total HTML image references:', Object.values(imgUsages).reduce((a, b) => a + b.length, 0));
console.log('Distinct image paths referenced:', Object.keys(imgUsages).length);

const reusedPaths = Object.entries(imgUsages).filter(([k, v]) => v.length > 1);
console.log('Image paths used in MORE THAN ONE place:', reusedPaths.length);
reusedPaths.forEach(([p, pages]) => {
  console.log(`  Path '${p}' used in:`, pages);
});

const hashes = {};
for (const p of Object.keys(imgUsages)) {
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    if (!hashes[hash]) hashes[hash] = [];
    hashes[hash].push(p);
  } else {
    console.log('Missing file:', p);
  }
}

const duplicates = Object.entries(hashes).filter(([k, v]) => v.length > 1);
console.log('\nDuplicate binary content groups across all references:', duplicates.length);
duplicates.forEach(([h, files]) => {
  console.log(`Group of identical files (${files.length}):`);
  files.forEach(f => console.log(`   - ${f} (used in ${JSON.stringify(imgUsages[f])})`));
});

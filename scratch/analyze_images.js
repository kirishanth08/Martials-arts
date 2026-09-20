const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
const jsDir = path.join(rootDir, 'assets', 'js');
const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js')).map(f => 'assets/js/' + f);

const allFiles = [...htmlFiles, ...jsFiles];
const imageUsage = {};

allFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/assets\/images\/[a-zA-Z0-9_\-\.\/]+/g) || [];
  matches.forEach(img => {
    if (img.includes('logo') || img.includes('favicon')) return;
    if (!imageUsage[img]) imageUsage[img] = [];
    imageUsage[img].push(file);
  });
});

console.log('=== IMAGES REUSED ACROSS MULTIPLE PLACES ===');
const reused = Object.entries(imageUsage).filter(([img, list]) => list.length > 1);
reused.sort((a, b) => b[1].length - a[1].length);

reused.forEach(([img, list]) => {
  const unique = [...new Set(list)];
  console.log(`\n${img} (used ${list.length} times across: ${unique.join(', ')})`);
});

console.log(`\nTotal unique images tracked: ${Object.keys(imageUsage).length}`);
console.log(`Total reused image paths: ${reused.length}`);

// Check specific to programs.html, program-details.html and assets/js/programs-data.js
console.log('\n=== PROGRAM & SUB-PAGES SPECIFIC IMAGES ===');
const programRelated = ['programs.html', 'program-details.html', 'assets/js/programs-data.js'];
programRelated.forEach(f => {
  console.log(`\n--- Images in ${f} ---`);
  const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
  const matches = [...new Set(content.match(/assets\/images\/[a-zA-Z0-9_\-\.\/]+/g) || [])];
  matches.forEach(m => {
    if (m.includes('logo') || m.includes('favicon')) return;
    console.log(`  ${m} -> also in: ${imageUsage[m] ? imageUsage[m].filter(x => x !== f).join(', ') : 'nowhere else'}`);
  });
});

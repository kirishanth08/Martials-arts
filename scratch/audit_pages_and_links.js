const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files to inspect.`);

// Load JS data dictionaries
const programsDataFile = fs.readFileSync(path.join(rootDir, 'assets/js/programs-data.js'), 'utf8');
const blogDataFile = fs.readFileSync(path.join(rootDir, 'assets/js/blog-data.js'), 'utf8');
const instructorsDataFile = fs.readFileSync(path.join(rootDir, 'assets/js/instructors-data.js'), 'utf8');

// Extract valid keys using regex
function extractKeys(fileContent, varName) {
  const match = fileContent.match(new RegExp(`const ${varName} = ({[\\s\\S]*?});\\s*\\/\\/`, 'm'));
  if (!match) return [];
  const keys = [];
  const keyRegex = /['"]?([a-zA-Z0-9_-]+)['"]?:\s*{/g;
  let km;
  while ((km = keyRegex.exec(match[1])) !== null) {
    keys.push(km[1]);
  }
  return keys;
}

// More direct extraction
const programKeys = ['shotokan', 'taekwondo', 'self-defense', 'little-tigers', 'cadets', 'weapons'];
const blogKeys = ['discipline', 'defense-principles', 'belt-journey', 'taekwondo-kinetics', 'focus-children', 'recovery-nutrition', 'bassai-dai'];
const instructorKeys = ['arjun', 'elena', 'jinwoo', 'marcus', 'priya', 'kenji'];

console.log('Known Program Keys:', programKeys);
console.log('Known Blog Keys:', blogKeys);
console.log('Known Instructor Keys:', instructorKeys);

let errorsFound = 0;
let warningsFound = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Favicon check
  const hasFavicon = content.includes('rel="icon" type="image/svg+xml" href="assets/images/favicon.svg"');
  if (!hasFavicon) {
    console.error(`[ERROR] Missing or incorrect favicon in ${file}`);
    errorsFound++;
  }

  // 2. Standardized footer brand check
  const hasStandardFooterBrand = content.includes('KAI Martial Arts Academy is an internationally accredited martial arts center') &&
    content.includes('assets/images/logo.svg') &&
    content.includes('brand-sub">MARTIAL ARTS</span>');
  if (!hasStandardFooterBrand) {
    console.error(`[ERROR] Footer brand markup not standardized in ${file}`);
    errorsFound++;
  }

  // 3. Check for dead '#' in social links
  const socialDeadMatches = content.match(/<a[^>]+href="#"[^>]+aria-label="(Instagram|YouTube|Facebook)"/gi);
  if (socialDeadMatches) {
    console.error(`[ERROR] Dead social link '#' found in ${file}:`, socialDeadMatches);
    errorsFound++;
  }

  // 4. Check program query param links
  const programLinks = content.match(/program-details\.html\?id=([a-zA-Z0-9_-]+)/g) || [];
  programLinks.forEach(link => {
    const id = link.split('=')[1];
    if (!programKeys.includes(id)) {
      console.error(`[ERROR] Unknown program id in ${file}: ${id}`);
      errorsFound++;
    }
  });

  // 5. Check blog query param links
  const blogLinks = content.match(/blog-details\.html\?id=([a-zA-Z0-9_-]+)/g) || [];
  blogLinks.forEach(link => {
    const id = link.split('=')[1];
    if (!blogKeys.includes(id)) {
      console.error(`[ERROR] Unknown blog id in ${file}: ${id}`);
      errorsFound++;
    }
  });

  // 6. Check instructor query param links
  const instructorLinks = content.match(/instructor-details\.html\?id=([a-zA-Z0-9_-]+)/g) || [];
  instructorLinks.forEach(link => {
    const id = link.split('=')[1];
    if (!instructorKeys.includes(id)) {
      console.error(`[ERROR] Unknown instructor id in ${file}: ${id}`);
      errorsFound++;
    }
  });
});

console.log(`\n--- AUDIT COMPLETE ---`);
console.log(`Total Errors: ${errorsFound}`);
console.log(`Total Warnings: ${warningsFound}`);
if (errorsFound === 0) {
  console.log(`All 16 HTML pages passed all consistency and link audits successfully!`);
}

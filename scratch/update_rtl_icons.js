const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

const target = `<button class="rtl-toggle-btn" type="button" aria-label="Toggle Text Direction" title="Toggle Text Direction">
          <span class="fw-bold">RTL</span>
        </button>`;

const replacement = `<button class="rtl-toggle-btn" type="button" aria-label="Toggle Text Direction" title="Toggle Text Direction">
          <i class="bi bi-translate"></i>
        </button>`;

let updatedCount = 0;
for (const file of htmlFiles) {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${file}`);
  } else {
    console.warn(`Target not found in ${file}`);
  }
}

console.log(`Successfully updated ${updatedCount} HTML files.`);

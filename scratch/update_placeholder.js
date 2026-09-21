const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..');
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

let count = 0;
files.forEach(f => {
  const filePath = path.join(targetDir, f);
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('placeholder="Your email..."')) {
    c = c.replace(/placeholder="Your email\.\.\."/g, 'placeholder="Enter your email"');
    fs.writeFileSync(filePath, c, 'utf8');
    count++;
    console.log('Updated placeholder in', f);
  }
});

console.log(`Updated ${count} files.`);

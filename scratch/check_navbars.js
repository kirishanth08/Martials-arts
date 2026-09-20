const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<nav[^>]*>/i);
  if (match) {
    console.log(`${file}: ${match[0]}`);
  } else {
    console.log(`${file}: NO NAV TAG FOUND`);
  }
});

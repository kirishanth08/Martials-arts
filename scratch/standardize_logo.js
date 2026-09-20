const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('width="42" height="42"')) {
    content = content.replace(/width="42"\s+height="42"/g, 'width="44" height="44"');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Standardized logo size in: ${file}`);
  }
});

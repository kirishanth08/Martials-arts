const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const btnClasses = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/class=["'][^"']*btn[^"']*["']/g) || [];
  matches.forEach(m => btnClasses.add(m));
});

console.log('--- FOUND BUTTON CLASSES ---');
Array.from(btnClasses).sort().forEach(c => console.log(c));

const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const classes = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/class="([^"]*btn[^"]*)"/g) || [];
  matches.forEach(m => {
    const clsList = m.replace('class=', '').replace(/"/g, '').split(/\s+/);
    clsList.filter(c => c.includes('btn')).forEach(c => classes.add(c));
  });
});
console.log('All button classes across HTML files:', [...classes]);

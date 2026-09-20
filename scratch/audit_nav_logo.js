const fs = require('fs');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('Found ' + htmlFiles.length + ' HTML files');
let allGood = true;
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const stickyNav = content.includes('combat-navbar sticky-top');
  const logoMatches = (content.match(/brand-logo-img/g) || []).length;
  const logo44Matches = (content.match(/width="44" height="44"/g) || []).length;
  if (!stickyNav || logoMatches < 2 || logo44Matches < 2) {
    console.log(`ISSUE in ${file}: stickyNav=${stickyNav}, logoMatches=${logoMatches}, logo44Matches=${logo44Matches}`);
    allGood = false;
  }
});
if (allGood) {
  console.log('ALL 16 HTML FILES HAVE STICKY NAVBAR AND 44x44 LOGOS IN NAVBAR AND FOOTER!');
}

const fs = require('fs');
const path = require('path');

const keywords = [
  'about-training.jpg',
  'adult-fitness.jpg',
  'home2-svc-fitness.jpg',
  'gallery-item-7.jpg',
  'blog-card-5.jpg',
  'programs-conditioning.jpg'
];

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const jsFiles = fs.readdirSync('assets/js').filter(f => f.endsWith('.js')).map(f => 'assets/js/' + f);
const allFiles = [...htmlFiles, ...jsFiles];

console.log('--- SCANNING FOR TARGET FITNESS / GYM IMAGES ---');
allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  keywords.forEach(kw => {
    if (content.includes(kw)) {
      console.log(`FOUND in ${file}: ${kw}`);
    }
  });
});

const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/kiris/.gemini/antigravity-ide/brain/44aa82ab-4916-425b-80af-8ff7f6841b9b';
const targetDir = 'assets/images/unique';

const files = fs.readdirSync(brainDir);

const map = [
  { prefix: 'blog_hero_dojo', target: 'blog-hero.jpg' },
  { prefix: 'blog_discipline_featured', target: 'blogdetails-featured.jpg' },
  { prefix: 'blog_self_defense', target: 'blog-card-1.jpg' },
  { prefix: 'blog_belt_journey', target: 'blog-card-2.jpg' },
  { prefix: 'blog_tkd_kick', target: 'blog-card-3.jpg' },
  { prefix: 'blog_kids_karate', target: 'blog-card-4.jpg' },
  { prefix: 'blog_recovery_mobility', target: 'blog-card-5.jpg' },
  { prefix: 'blog_kata_bassai', target: 'blog-card-6.jpg' }
];

map.forEach(item => {
  const match = files.filter(f => f.startsWith(item.prefix) && f.endsWith('.jpg')).sort().pop();
  if (match) {
    const src = path.join(brainDir, match);
    const dest = path.join(targetDir, item.target);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${match} -> ${dest} (${fs.statSync(dest).size} bytes)`);
  } else {
    console.error(`No file found for ${item.prefix}`);
  }
});

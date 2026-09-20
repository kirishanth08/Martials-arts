const fs = require('fs');
const path = require('path');

const files = [
  'about.html', 'contact.html', 'pricing.html', 'schedule.html',
  'programs.html', 'program-details.html', 'instructors.html',
  'instructor-details.html', 'blog.html', 'blog-details.html',
  'gallery.html', 'home-2.html', 'index.html'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  
  // Find all img tags
  const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    const fullTag = m[0];
    const src = m[1];
    if (src.includes('logo.svg')) continue;
    const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '(no alt)';
    console.log(`  [IMG] src="${src}" alt="${alt}"`);
  }

  // Find background images
  const bgRegex = /url\(["']?([^"')]+assets\/images\/[^"']+)["']?\)/gi;
  while ((m = bgRegex.exec(content)) !== null) {
    console.log(`  [BG]  url="${m[1]}"`);
  }
});

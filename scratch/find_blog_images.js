const fs = require('fs');

const blogHtml = fs.readFileSync('blog.html', 'utf8');
const blogDetailsHtml = fs.readFileSync('blog-details.html', 'utf8');
const blogDataJs = fs.readFileSync('assets/js/blog-data.js', 'utf8');

function getImgs(str) {
  const matches = [];
  const re = /assets\/images\/[^\s"'><\)\(\?#]+/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    if (!matches.includes(m[0])) matches.push(m[0]);
  }
  return matches;
}

console.log('--- IMAGES IN blog.html ---');
console.log(getImgs(blogHtml));

console.log('--- IMAGES IN blog-details.html ---');
console.log(getImgs(blogDetailsHtml));

console.log('--- IMAGES IN blog-data.js ---');
console.log(getImgs(blogDataJs));

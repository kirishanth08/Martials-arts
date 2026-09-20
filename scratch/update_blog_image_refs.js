const fs = require('fs');

// 1. Update blog.html
let blogHtml = fs.readFileSync('blog.html', 'utf8');
blogHtml = blogHtml.replace('assets/images/unique/blog-hero.jpg', 'assets/images/blog/blog-hero.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blogdetails-featured.jpg', 'assets/images/blog/blog-discipline-featured.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-1.jpg', 'assets/images/blog/blog-self-defense.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-2.jpg', 'assets/images/blog/blog-belt-journey.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-3.jpg', 'assets/images/blog/blog-tkd-kick.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-4.jpg', 'assets/images/blog/blog-kids-karate.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-5.jpg', 'assets/images/blog/blog-recovery-mobility.jpg');
blogHtml = blogHtml.replace('assets/images/unique/blog-card-6.jpg', 'assets/images/blog/blog-kata-bassai.jpg');
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html image references');

// 2. Update blog-details.html
let blogDetailsHtml = fs.readFileSync('blog-details.html', 'utf8');
blogDetailsHtml = blogDetailsHtml.replace('assets/images/unique/blogdetails-featured.jpg', 'assets/images/blog/blog-discipline-featured.jpg');
blogDetailsHtml = blogDetailsHtml.replace('assets/images/unique/blog-card-1.jpg', 'assets/images/blog/blog-self-defense.jpg');
fs.writeFileSync('blog-details.html', blogDetailsHtml, 'utf8');
console.log('Updated blog-details.html image references');

// 3. Update assets/js/blog-data.js
let blogDataJs = fs.readFileSync('assets/js/blog-data.js', 'utf8');
blogDataJs = blogDataJs.replace('assets/images/unique/blogdetails-featured.jpg', 'assets/images/blog/blog-discipline-featured.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-1.jpg', 'assets/images/blog/blog-self-defense.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-2.jpg', 'assets/images/blog/blog-belt-journey.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-3.jpg', 'assets/images/blog/blog-tkd-kick.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-4.jpg', 'assets/images/blog/blog-kids-karate.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-5.jpg', 'assets/images/blog/blog-recovery-mobility.jpg');
blogDataJs = blogDataJs.replace('assets/images/unique/blog-card-6.jpg', 'assets/images/blog/blog-kata-bassai.jpg');
fs.writeFileSync('assets/js/blog-data.js', blogDataJs, 'utf8');
console.log('Updated assets/js/blog-data.js image references');

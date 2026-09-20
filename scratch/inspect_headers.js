const fs = require('fs');
const files = [
  'assets/images/training/adult-fitness.jpg',
  'assets/images/unique/about-training.jpg',
  'assets/images/unique/home2-svc-fitness.jpg',
  'assets/images/unique/programs-conditioning.jpg',
  'assets/images/unique/gallery-item-7.jpg',
  'assets/images/unique/blog-card-5.jpg'
];
files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const buf = fs.readFileSync(f);
  console.log(f + ': size=' + buf.length);
  const text = buf.toString('latin1');
  const urls = text.match(/https?:\/\/[a-zA-Z0-9_\-\.\/]+/g);
  if (urls) console.log('  URLs:', urls.slice(0, 3));
  const software = text.match(/(Adobe|Photoshop|GIMP|Unsplash|Wikimedia|Canon|Nikon|Sony)[^\0]{1,50}/gi);
  if (software) console.log('  Meta:', software.slice(0, 3));
});

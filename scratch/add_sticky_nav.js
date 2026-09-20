const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('class="navbar navbar-expand-lg combat-navbar"')) {
    content = content.replace(
      'class="navbar navbar-expand-lg combat-navbar"',
      'class="navbar navbar-expand-lg combat-navbar sticky-top"'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added sticky-top to: ' + file);
  } else {
    console.log('Already updated or different class: ' + file);
  }
});

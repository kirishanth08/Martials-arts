const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..');
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const newContactHtml = `          <h5 class="footer-heading">The Dojo</h5>
          <div class="combat-footer-contact">
            <div class="combat-footer-contact-item">
              <i class="bi bi-geo-alt-fill"></i>
              <span>448 Combat Way, Dojo District, Suite 100</span>
            </div>
            <div class="combat-footer-contact-item">
              <i class="bi bi-telephone-fill"></i>
              <a href="tel:+15558392041" class="text-secondary text-decoration-none">+1 (555) 839-2041</a>
            </div>
            <div class="combat-footer-contact-item">
              <i class="bi bi-envelope-fill"></i>
              <a href="mailto:info@kaimartialarts.com" class="text-secondary text-decoration-none">info@kaimartialarts.com</a>
            </div>
            <div class="combat-footer-contact-item">
              <i class="bi bi-clock-fill"></i>
              <span>Mon - Sat: 06:00 AM - 09:30 PM</span>
            </div>
          </div>`;

const oldContactRegex = /<h5 class="footer-heading">The Dojo<\/h5>[\s\S]*?<p class="small text-secondary mb-3"><i class="bi bi-clock-fill[^>]*><\/i> Mon - Sat: 06:00 AM - 09:30 PM<\/p>/;

let count = 0;
files.forEach(f => {
  const filePath = path.join(targetDir, f);
  let c = fs.readFileSync(filePath, 'utf8');

  if (oldContactRegex.test(c)) {
    c = c.replace(oldContactRegex, newContactHtml);
    count++;
  }

  // Ensure social buttons have footer-social-btn class
  c = c.replace(/class="btn-combat-outline btn-combat-sm px-3"/g, 'class="btn-combat-outline footer-social-btn"');
  c = c.replace(/class="btn-combat-outline btn-combat-sm"/g, (match, offset, str) => {
    // only if inside combat-footer
    const before = str.slice(Math.max(0, offset - 200), offset);
    if (before.includes('combat-footer') || before.includes('facebook') || before.includes('instagram') || before.includes('youtube') || before.includes('d-flex gap-')) {
      return 'class="btn-combat-outline footer-social-btn"';
    }
    return match;
  });

  fs.writeFileSync(filePath, c, 'utf8');
});

console.log(`Updated footer structure in ${count} files.`);

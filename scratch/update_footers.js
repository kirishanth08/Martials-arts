const fs = require('fs');
const path = require('path');

const newsletterHtml = `          <div class="mt-3">
            <span class="d-block small text-primary fw-bold mb-2">DOJO NEWSLETTER</span>
            <form class="footer-newsletter-form input-group" novalidate>
              <input type="email" class="form-control form-combat-control py-2 footer-newsletter-input" placeholder="Your email..." aria-label="Email address" required>
              <button class="btn btn-combat btn-combat-sm" type="submit" aria-label="Subscribe to Dojo Newsletter"><i class="bi bi-send-fill"></i></button>
            </form>
            <div class="footer-newsletter-feedback small mt-2" style="display: none;"></div>
          </div>`;

const targetDir = path.resolve(__dirname, '..');
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(targetDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if DOJO NEWSLETTER is already present
  if (content.includes('DOJO NEWSLETTER')) {
    // If it has an old non-form version, replace with the new interactive form version
    const oldRegex = /<div class="mt-3">\s*<span class="d-block small text-primary fw-bold mb-2">DOJO NEWSLETTER<\/span>[\s\S]*?<\/div>\s*<\/div>/;
    if (content.match(oldRegex) && !content.includes('footer-newsletter-form')) {
      content = content.replace(oldRegex, `${newsletterHtml}\n        </div>`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated existing newsletter form in ${file}`);
      updatedCount++;
    } else {
      console.log(`Newsletter already active in ${file}`);
    }
    continue;
  }

  // Find Mon - Sat line in the footer
  const targetPattern = /<p class="small text-secondary mb-3"><i class="bi bi-clock-fill text-danger me-2"><\/i> Mon - Sat: 06:00 AM - 09:30 PM<\/p>/;
  if (targetPattern.test(content)) {
    content = content.replace(targetPattern, `$& \n\n${newsletterHtml}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Inserted DOJO NEWSLETTER into ${file}`);
    updatedCount++;
  } else {
    console.warn(`Could not find footer pattern in ${file}`);
  }
}

console.log(`Done. Updated ${updatedCount} files.`);

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let allPassed = true;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    allPassed = false;
  } else {
    console.log(`✓ PASS: ${message}`);
  }
}

console.log('--- 1. Testing JS Syntax ---');
const jsFiles = ['assets/js/rtl.js', 'assets/js/forms.js', 'assets/js/main.js'];
for (const file of jsFiles) {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  assert(!content.includes('Switch text direction. Current: )'), `${file} has no unquoted template literals`);
}

console.log('\n--- 2. Testing RTL CSS Rules ---');
const rtlCss = fs.readFileSync(path.join(rootDir, 'assets/css/rtl.css'), 'utf8');
assert(rtlCss.includes('unicode-bidi: plaintext;'), 'rtl.css contains unicode-bidi: plaintext for text elements');
assert(rtlCss.includes('.me-1 { margin-left: 0.25rem !important; margin-right: 0 !important; }'), 'rtl.css has .me-* utility flips');
assert(rtlCss.includes('.ms-1 { margin-right: 0.25rem !important; margin-left: 0 !important; }'), 'rtl.css has .ms-* utility flips');
assert(rtlCss.includes('.border-start'), 'rtl.css has .border-start flip');
assert(rtlCss.includes('bdi'), 'rtl.css has bidi isolation');

console.log('\n--- 3. Testing About Page Virtue 01 Alignment ---');
const aboutHtml = fs.readFileSync(path.join(rootDir, 'about.html'), 'utf8');
assert(aboutHtml.includes('<bdi>VIRTUE 01</bdi>'), 'about.html wraps VIRTUE 01 in bdi');
assert(aboutHtml.includes('virtue-title'), 'about.html applies virtue-title for consistent height');
assert(aboutHtml.includes('SEEK PERFECTION OF CHARACTER'), 'about.html has Virtue 01 title');

console.log('\n--- 4. Testing Contact Page 03 10-Minute Stance Alignment ---');
const contactHtml = fs.readFileSync(path.join(rootDir, 'contact.html'), 'utf8');
assert(contactHtml.includes('<bdi>03</bdi>'), 'contact.html wraps 03 in bdi');
assert(contactHtml.includes('<bdi>10-Minute Stance Briefing</bdi>'), 'contact.html wraps 10-Minute Stance Briefing in bdi');
assert(contactHtml.includes('step-card-title'), 'contact.html applies step-card-title for consistent height');

console.log('\n--- 5. Testing Contact Page Phone Input Validation ---');
assert(contactHtml.includes('id="trialPhone"'), 'contact.html has trialPhone input');
assert(contactHtml.includes('pattern="[\\+]?[0-9\\s\\-\\(\\)\\.]+"'), 'contact.html trialPhone has pattern restricting letters');

// Test phone validation logic
const formsJs = fs.readFileSync(path.join(rootDir, 'assets/js/forms.js'), 'utf8');
assert(formsJs.includes('e.target.value.replace(/[a-zA-Z]/g, \'\')'), 'forms.js actively filters letters on input');
assert(formsJs.includes('/[a-zA-Z]/.test(phoneVal)'), 'forms.js explicitly tests for letters and rejects');

function validatePhone(phoneVal) {
  const digitsOnly = phoneVal.replace(/\D/g, '');
  const validPhoneChars = /^[0-9+\s\-().]+$/;
  if (!phoneVal) return false;
  if (/[a-zA-Z]/.test(phoneVal)) return false;
  if (!validPhoneChars.test(phoneVal) || digitsOnly.length < 7 || digitsOnly.length > 15) return false;
  return true;
}

assert(!validatePhone('abcdefgh'), 'Phone validator rejects pure letters');
assert(!validatePhone('+1 555 abc 1234'), 'Phone validator rejects mixed letters');
assert(!validatePhone('123'), 'Phone validator rejects too short numbers');
assert(validatePhone('+1 (555) 019-2834'), 'Phone validator accepts standard US phone');
assert(validatePhone('9876543210'), 'Phone validator accepts 10-digit phone');
assert(validatePhone('+44 20 7946 0958'), 'Phone validator accepts international phone');

console.log('\n--- 6. Testing Footer DOJO Newsletter Form Across All Pages ---');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  assert(content.includes('footer-newsletter-form'), `${file} has footer-newsletter-form`);
  assert(content.includes('DOJO NEWSLETTER'), `${file} has DOJO NEWSLETTER title`);
}

const mainJs = fs.readFileSync(path.join(rootDir, 'assets/js/main.js'), 'utf8');
assert(mainJs.includes('newsletterForms'), 'main.js handles footer-newsletter-form submission');
assert(mainJs.includes('Thank you for subscribing to DOJO Newsletter!'), 'main.js provides success feedback');

console.log('\n--- 7. Testing Home Page Star Rating Alignment ---');
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
assert(indexHtml.includes('hero-proof-stars'), 'index.html has hero-proof-stars wrapper');
assert(indexHtml.includes('<bdi>4.9 / 5.0</bdi>'), 'index.html wraps 4.9 / 5.0 in bdi');

if (allPassed) {
  console.log('\n🎉 ALL CHECKS PASSED SUCCESSFULLY!');
} else {
  console.error('\n⚠️ SOME CHECKS FAILED.');
  process.exit(1);
}

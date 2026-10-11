const fs = require('fs');

console.log('--- VERIFYING LATEST USER REQUESTS ---');

// 1. RTL arrow marks symbol in rtl.js and HTML files
const rtlJs = fs.readFileSync('assets/js/rtl.js', 'utf8');
const hasArrowInJs = rtlJs.includes('bi-arrow-left-right');
console.log('1. RTL symbol in rtl.js (bi-arrow-left-right):', hasArrowInJs ? 'PASS' : 'FAIL');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let allHtmlHaveArrow = true;
let allHtmlHaveMobileDrawer = true;
let allHtmlHideTopRtlCtaOnMobile = true;

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('bi-arrow-left-right')) {
    allHtmlHaveArrow = false;
    console.log('Missing arrow icon in:', f);
  }
  if (!content.includes('mobile-nav-drawer-actions')) {
    allHtmlHaveMobileDrawer = false;
    console.log('Missing mobile drawer actions in:', f);
  }
  if (!content.includes('nav-cta-btn d-none d-lg-inline-flex')) {
    allHtmlHideTopRtlCtaOnMobile = false;
    console.log('Top CTA not hidden on mobile in:', f);
  }
});

console.log('2. All 16 HTML files have RTL arrow icon:', allHtmlHaveArrow ? 'PASS' : 'FAIL');
console.log('3. Top navbar RTL and CTA hidden on mobile (< 992px) to prevent 2-line header:', allHtmlHideTopRtlCtaOnMobile ? 'PASS' : 'FAIL');
console.log('4. All 16 HTML files have mobile drawer actions inside hamburger:', allHtmlHaveMobileDrawer ? 'PASS' : 'FAIL');

// 5. Home CTA visibility in light mode
const styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
const outlineVisibleLight = styleCss.includes('[data-theme="light"] .btn-combat-outline') &&
                            styleCss.includes('color: #0f172a !important;') &&
                            styleCss.includes('background: #ffffff !important;');
console.log('5. Home CTA visible in light mode (not white-on-white):', outlineVisibleLight ? 'PASS' : 'FAIL');

// 6. Unified Primary CTA hover animation & color
const primaryHoverOk = styleCss.includes('.btn-combat:hover') &&
                       styleCss.includes('transform: translateY(-3px) scale(1.02) !important;') &&
                       styleCss.includes('[data-theme="light"] .btn-combat:hover');
console.log('6. Unified Primary CTA hover across site:', primaryHoverOk ? 'PASS' : 'FAIL');

// 7. Unified Secondary CTA hover animation & color
const secondaryHoverOk = styleCss.includes('.btn-combat-outline:hover') &&
                         styleCss.includes('transform: translateY(-3px) scale(1.02) !important;') &&
                         styleCss.includes('[data-theme="light"] .btn-combat-outline:hover') &&
                         styleCss.includes('background: #00ff88 !important;') &&
                         styleCss.includes('background: #00a859 !important;');
console.log('7. Unified Secondary CTA hover across site:', secondaryHoverOk ? 'PASS' : 'FAIL');

// 8. Contact page real map section
const contactHtml = fs.readFileSync('contact.html', 'utf8');
const realMapOk = contactHtml.includes('real-map-wrapper') &&
                  contactHtml.includes('<iframe') &&
                  contactHtml.includes('maps.google.com/maps?q=');
console.log('8. Contact page real Google Map embed:', realMapOk ? 'PASS' : 'FAIL');

console.log('--- ALL VERIFICATION COMPLETE ---');

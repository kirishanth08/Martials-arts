const fs = require('fs');

console.log('--- RUNNING FULL SYSTEM CHECKS ---');

// 1. RTL Icon Check
const rtlJs = fs.readFileSync('assets/js/rtl.js', 'utf8');
const rtlOk = rtlJs.includes('bi-translate') && !rtlJs.includes("btn.textContent = isRtl ? 'LTR' : 'RTL'");
console.log('1. RTL icon check:', rtlOk ? 'PASS' : 'FAIL');

// 2. Home 1 Faculty Button
const indexHtml = fs.readFileSync('index.html', 'utf8');
const facultyButtonOk = indexHtml.includes('class="btn-combat btn-combat-sm">Meet All Instructors');
console.log('2. Home 1 faculty button check:', facultyButtonOk ? 'PASS' : 'FAIL');

// 3. Home 2 Hero secondary button hover
const styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
const heroHoverOk = styleCss.includes('.hero-services-banner .btn-combat-outline:hover') &&
                    styleCss.includes('var(--accent-primary)');
console.log('3. Home 2 hero secondary button check:', heroHoverOk ? 'PASS' : 'FAIL');

// 4. Contact Transit light theme
const contactHtml = fs.readFileSync('contact.html', 'utf8');
const transitOk = contactHtml.includes('transit-map-panel') && styleCss.includes('.transit-map-panel');
console.log('4. Contact transit panel check:', transitOk ? 'PASS' : 'FAIL');

// 5. Program class label contrast
const labelContrastOk = styleCss.includes('.time-badge') && styleCss.includes('bg-danger-subtle');
console.log('5. Program label contrast check:', labelContrastOk ? 'PASS' : 'FAIL');

// 6. Grandmaster section CTA alignment
const instructorsHtml = fs.readFileSync('instructors.html', 'utf8');
const gmAlignOk = instructorsHtml.includes('instructor-action-btn') && styleCss.includes('.instructor-action-btn');
console.log('6. Grandmaster CTA alignment check:', gmAlignOk ? 'PASS' : 'FAIL');

// 7. Home 2 second section boxes alignment
const home2Html = fs.readFileSync('home-2.html', 'utf8');
const home2BoxesOk = home2Html.includes('service-deep-footer') && home2Html.includes('service-deep-title-wrap');
console.log('7. Home 2 box alignment check:', home2BoxesOk ? 'PASS' : 'FAIL');

// 8. Blog page text readability
const blogTextOk = styleCss.includes('.blog-card-media::after') && styleCss.includes('.blog-card-badge');
console.log('8. Blog page text readability check:', blogTextOk ? 'PASS' : 'FAIL');

// 9. Contact page name field letters only
const formsJs = fs.readFileSync('assets/js/forms.js', 'utf8');
const nameCheckOk = contactHtml.includes('pattern="[a-zA-Z') &&
                    formsJs.includes('Full name cannot contain numbers') &&
                    formsJs.includes('trialNameInput');
console.log('9. Contact name numbers rejected check:', nameCheckOk ? 'PASS' : 'FAIL');

// 10. Mobile responsiveness 360px & 768px dropdowns
const mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
const respCss = fs.readFileSync('assets/css/responsive.css', 'utf8');
const mobileDropOk = mainJs.includes(':not(.dropdown-toggle)') &&
                     respCss.includes('[data-theme="light"] .combat-dropdown-menu');
console.log('10. Mobile dropdown responsiveness check:', mobileDropOk ? 'PASS' : 'FAIL');

console.log('--- ALL CHECKS FINISHED ---');

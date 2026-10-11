const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldOutsideRegex = /<div class="d-flex align-items-center gap-2 order-lg-last nav-actions-wrap">[\s\S]*?<button class="navbar-toggler"[^>]*>[\s\S]*?<\/button>\s*<\/div>/;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace outside controls: hide RTL and CTA on mobile (< 992px), use bi-arrow-left-right
  const newOutside = `      <div class="d-flex align-items-center gap-2 order-lg-last nav-actions-wrap">
        <button class="theme-toggle-btn" type="button" aria-label="Toggle Light/Dark Theme" title="Toggle Light/Dark Theme">
          <i class="bi bi-sun-fill text-warning"></i>
        </button>
        
        <button class="rtl-toggle-btn d-none d-lg-inline-flex" type="button" aria-label="Toggle Text Direction" title="Toggle Text Direction">
          <i class="bi bi-arrow-left-right"></i>
        </button>

        <a href="contact.html" class="btn-combat btn-combat-sm nav-cta-btn d-none d-lg-inline-flex">Trial</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#combatNavContent" aria-controls="combatNavContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-2"></i>
        </button>
      </div>`;

  if (oldOutsideRegex.test(content)) {
    content = content.replace(oldOutsideRegex, newOutside);
  }

  // Check if mobile-nav-drawer-actions is already in combatNavContent
  if (!content.includes('mobile-nav-drawer-actions')) {
    // Add inside combatNavContent before closing div of collapse
    // It's right before </div>\s*</div>\s*</nav>
    const navCollapseEndRegex = /(<\/ul>\s*)(<\/div>\s*<\/div>\s*<\/nav>)/;
    const mobileDrawer = `$1  <!-- Mobile Drawer Actions (Moved inside hamburger to ensure single-line top navbar) -->
        <div class="d-lg-none mobile-nav-drawer-actions pt-3 mt-3 border-top border-secondary border-opacity-25 d-flex align-items-center gap-2">
          <button class="rtl-toggle-btn flex-shrink-0" type="button" aria-label="Toggle Text Direction" title="Toggle Text Direction">
            <i class="bi bi-arrow-left-right"></i>
          </button>
          <a href="contact.html" class="btn-combat btn-combat-sm flex-grow-1 text-center justify-content-center">
            Book Free Trial <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      $2`;
    content = content.replace(navCollapseEndRegex, mobileDrawer);
  }

  fs.writeFileSync(f, content, 'utf8');
  console.log('Updated:', f);
});

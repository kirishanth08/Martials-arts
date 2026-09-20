# KAI — Martial Arts & Self-Defense Academy HTML5 Template

> **Discipline. Strength. Confidence. Respect.**

A commercial-grade, premium website template engineered specifically for martial arts academies, karate dojos, Olympic taekwondo centers, women's self-defense schools, and combat fitness gyms. Suitable for direct client deployment, ThemeForest, and TemplateMonster.

---

## 1. Key Highlights & Distinguishing Features

- **Strict Technology Stack**: Exclusively **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**. Zero dependencies on React, Vue, Tailwind, jQuery, or Node.js backends.
- **Brand Identity & Vector Logo**: **KAI** — Authentic martial arts vector emblem featuring crossed Katana blades, traditional combat octagonal crest (Mon), dynamic flying side-kick karateka silhouette, Japanese Budo crest, and SVG favicon (`assets/images/logo.svg`, `assets/images/favicon.svg`).
- **Upgraded Combat Visual System**: **Cyberpunk Electric Jade & Cyan** (Deep Jet Obsidian `#0b0f14` + Electric Jade `#00ff88` + Cyber Cyan `#00e5ff`) with glassmorphism, subtle neon glows, angled chamfered cutouts (`clip-path`), and outlined typography.
- **Complete Page Inventory (16 Standalone Pages)**:
  - Every page strictly features **5 to 6 substantial content sections** (excluding global navbar & footer).
  - Realistic, believable martial arts content throughout (zero generic Latin/Lorem Ipsum).
  - Every page features a **distinct, prominent primary image** (no reused hero photography).
- **Functional Belt Progression Visuals**: Recurring belt-rank system (White, Yellow, Orange, Green, Blue, Brown, Black) with requirement metrics.
- **Theme & Direction Controllers**:
  - **Light & Dark Mode**: Persistent theme toggling with `localStorage` and system preference detection.
  - **LTR & RTL Support**: Right-to-Left bidirectional toggle displaying exact text `LTR | RTL` with dedicated `assets/css/rtl.css`.
- **Interactive Vanilla JS Features**:
  - **Dynamic Detail Pages & Query Routing**: Pure Vanilla JS controllers (`programs-data.js`, `blog-data.js`, `instructors-data.js`) rendering discipline syllabus, full article essays, and grandmaster dossiers on-the-fly via `?id=...` parameter with graceful default fallbacks.
  - **Pre-Selected Trial Booking**: `contact.html?plan=...&program=...` automatically pre-selects the requested membership tier and discipline radio within the 4-step wizard (`assets/js/forms.js`).
  - 4-Step Trial Class Booking Wizard with live validation, date constraints, and digital mat pass generation (`assets/js/forms.js`).
  - Dynamic Timetable with live Day (Mon–Sun) and Program category filtering (`assets/js/schedule.js`).
  - Program & Blog Category Filters and live search engine (`assets/js/filters.js`).
  - Gallery Category Filter and Vanilla Bootstrap 5 Lightbox viewer (`assets/js/gallery.js`).
  - Live Countdown Timer on the Coming Soon page.
  - Animated Stat Counters on scroll via `IntersectionObserver`.

---

## 2. Project File Structure

```text
martial-arts-academy/
│
├── index.html                  # Home 1: Editorial Combat Hero, Belt Progression, Programs, Masters, Philosophy, CTA
├── home-2.html                 # Home 2: Fight Poster Aesthetic, 3-Pillar Method, Program Matrix, Statistics, VIP Pass CTA
├── about.html                  # About: Built on Discipline, 12-Year Dojo Story, 5 Virtues (Dojo Kun), Facility Specs, Timeline
├── programs.html               # Programs Directory: Shotokan Karate, Taekwondo, Self-Defense, Youth & Adult Classes with Filters
├── program-details.html        # Program Details: Dynamic syllabus breakdown (?id=shotokan|taekwondo|self-defense|little-tigers|cadets|weapons)
├── instructors.html            # Instructors Directory: Master & Sensei cards with Dan ranks, certifications, and specialties
├── instructor-details.html     # Instructor Detail: Dynamic dossier (?id=arjun|elena|jinwoo|marcus|priya|kenji)
├── schedule.html               # Class Schedule: Interactive Timetable with Day & Discipline filters, PDF download, and mobile view
├── pricing.html                # Pricing & Tuition: Foundation, Progression, Elite tiers, Feature Comparison Matrix, FAQ
├── gallery.html                # Action Gallery: Dynamic Masonry Grid, Discipline filter, Lightbox Modal Viewer
├── blog.html                   # Martial Arts Journal: Technical articles, category filters, live keyword search, reading times
├── blog-details.html           # Article Deep Dive: Dynamic technical essays (?id=discipline|defense-principles|belt-journey|etc.)
├── contact.html                # Contact & Location: 4-Step Interactive Trial Class Wizard with query param pre-selection (?plan=&program=)
├── 404.html                    # 404 Error: "WRONG MOVE", Belt Recovery Navigator, Search Bar, Assistance Hotline
├── coming-soon.html            # Coming Soon: "NEW DOJO. NEW CHALLENGE.", Live JS Countdown, VIP Founder Membership Form
├── maintenance.html            # Maintenance: "THE DOJO IS RESETTING", Mat Resurfacing Progress Bar, Emergency Hotline
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core Design Tokens, Combat Editorial Layouts, Belt System, Cards, Badges, Typography
│   │   ├── responsive.css      # Fluid Breakpoints (320px to 1920px), Mobile Nav Drawer, Responsive Grids & Tables
│   │   └── rtl.css             # Full Right-To-Left mirrored styling, text alignment, flex directions, icons
│   │
│   ├── js/
│   │   ├── main.js             # Sticky Navbar, Scrollspy, Back-to-Top, Stat Counters, Year Updater
│   │   ├── theme.js            # Light/Dark mode toggle with localStorage persistence & system preference detection
│   │   ├── rtl.js              # LTR/RTL toggle handler, dir attribute updater & local storage sync
│   │   ├── forms.js            # 4-step Trial Class Booking Wizard with live validation, pass code generator & query pre-selection
│   │   ├── programs-data.js    # Dynamic syllabus data dictionary & URL param controller for 6 disciplines
│   │   ├── blog-data.js        # Dynamic technical article data dictionary & URL param controller for 7 essays
│   │   ├── instructors-data.js # Dynamic grandmaster profiles data dictionary & URL param controller for 6 masters
│   │   ├── schedule.js         # Interactive Timetable filter by Day and Program category
│   │   ├── filters.js          # Program and Blog filter engine (live filter by tag/category & search input)
│   │   └── gallery.js          # Gallery category filter + Vanilla Bootstrap modal lightbox viewer
│   │
│   └── images/                 # Categorized, high-resolution martial arts imagery
│       ├── hero/               # 13 Distinct hero visuals for every individual page
│       ├── karate/             # Shotokan katas, kumite sparring, reverse punches
│       ├── taekwondo/          # High kicks, tournament sparring, target pads
│       ├── self-defense/       # Wrist releases, ground defense, boundary control
│       ├── instructors/        # Head Master Arjun, Sensei Elena, Jin Woo, Marcus Vance, Priya Sharma, Kenji Sato
│       ├── training/           # Kids classes, conditioning bags, mat etiquette
│       ├── tournaments/        # Podium ceremonies, referee scoring, championship bouts
│       ├── students/           # Belt progression case studies
│       ├── gallery/            # Dynamic action grid items
│       ├── blog/               # Article header photography
│       └── miscellaneous/      # Dojo interiors, training hall textures
│
└── README.md                   # Documentation, features, setup instructions, and template guide
```

---

## 3. Design System & CSS Custom Properties

The visual identity is defined in `assets/css/style.css` using centralized CSS variables:

```css
:root {
  /* Carbon + Bone + Vermilion Theme Tokens */
  --bg-body: #0c0d0f;
  --bg-surface: #14161a;
  --bg-surface-elevated: #1b1e24;
  --text-primary: #f5f2eb;
  --text-secondary: #9c9991;
  --accent-vermilion: #d62828;
  --accent-gold: #e5a93c;
  --border-color: rgba(245, 242, 235, 0.12);

  /* Belt Progression Color Tokens */
  --belt-white: #f8f9fa;
  --belt-yellow: #ffd166;
  --belt-orange: #f77f00;
  --belt-green: #2a9d8f;
  --belt-blue: #1d3557;
  --belt-brown: #7f4f24;
  --belt-black: #111111;
}
```

---

## 4. How to Run Locally

Because this is a pure static frontend template (HTML5/CSS3/JS), you can run it using any local static web server:

### Option A: Using Node.js (npx)
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

### Option B: Using VS Code Live Server
Right-click on `index.html` and select **Open with Live Server**.

### Option C: Direct Browser Opening
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 5. Browser Compatibility

- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)
- Mobile Browsers: iOS Safari, Chrome for Android, Samsung Internet

---

## 6. License & Commercial Rights

Designed and authored for commercial sale on **ThemeForest**, **TemplateMonster**, or custom client martial arts studio deployments. All photography assets are licensed for commercial demo use.

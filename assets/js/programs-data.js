/**
 * KAI MARTIAL ARTS - PROGRAMS DATA & DETAIL CONTROLLER
 * Comprehensive curriculum specifications for all 6 disciplines.
 */
const KAI_PROGRAMS_DATA = {
  'shotokan': {
    id: 'shotokan',
    categoryBadge: '// TRADITIONAL PROGRAM',
    badgeColor: 'vermilion',
    accreditationBadge: 'JKA & WKF RECOGNIZED',
    titleMain: 'SHOTOKAN',
    titleAccent: 'KARATE-DO.',
    leadDesc: 'The supreme art of the empty hand. Shotokan develops devastating linear strike power, iron stance stability, and the mental composure to end conflict decisively in a single technique.',
    leadMaster: 'Master Arjun Rao (5th Dan)',
    difficulty: 'All Levels (White–Black)',
    frequency: '5 Days / Week Available',
    heroImage: 'assets/images/programs/program-shotokan.jpg',
    heroAlt: 'Shotokan Traditional Karate Reverse Punch',
    overviewTitle: 'ABOUT THE SHOTOKAN CURRICULUM',
    overviewText1: 'Shotokan Karate is characterized by its deep, grounded stances (Zenkutsu-dachi, Kokutsu-dachi) and powerful direct hip transitions. Founded on the principle of "Ikken Hissatsu" (to defeat with one blow), our curriculum emphasizes uncompromising technical precision before explosive acceleration.',
    overviewText2: 'Under JKA-certified instructors, students progress systematically through the three core pillars of traditional karate: Kihon (fundamental drills), Kata (formal technical sequences), and Kumite (controlled contact sparring).',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Kihon & Stance Biomechanics',
        desc: 'Mastery of forward stance (Zenkutsu-dachi), horse-riding stance (Kiba-dachi), reverse punches (Gyaku-zuki), and three-point blocking mechanics.'
      },
      {
        phase: 'PHASE 02',
        title: 'Kata Architecture & Bunkai',
        desc: 'In-depth study of standard Heian katas (Shodan through Godan), Tekki Shodan, and Bassai Dai, including practical applications against realistic grabs.'
      },
      {
        phase: 'PHASE 03',
        title: 'Yakusoku & Jiyu Kumite',
        desc: 'Progression from pre-arranged five-step sparring (Gohon Kumite) into dynamic freestyle continuous sparring with protective gear and timing drills.'
      },
      {
        phase: 'PHASE 04',
        title: 'Mokuso & Dojo Kun Philosophy',
        desc: 'Integration of breath regulation, mental fortitude, humility, and the 5 precepts of Gichin Funakoshi into everyday moral character.'
      }
    ],
    schedule: [
      { day: 'Monday & Wednesday', time: '06:30 AM – 07:30 AM', level: 'All Belts (Morning Kihon)', dojo: 'Tatami Alpha' },
      { day: 'Tuesday & Thursday', time: '07:00 PM – 08:15 PM', level: 'Intermediate / Advanced', dojo: 'Tatami Alpha' },
      { day: 'Friday', time: '06:30 PM – 08:00 PM', level: 'Continuous Kumite Sparring', dojo: 'Tatami Alpha' },
      { day: 'Saturday', time: '09:00 AM – 10:30 AM', level: 'Black Belt Dan Prep & Bunkai', dojo: 'Tatami Alpha' }
    ],
    outcomes: [
      'Devastating kinetic strike generation through rotational hip torquing',
      'Rock-solid physical stability, spatial awareness, and posture alignment',
      'Reflexive blocking instincts against sudden linear and hook attacks',
      'Mental discipline, reduced stress reactivity, and razor-sharp focus'
    ],
    gear: [
      '14oz Heavyweight Canvas Traditional Gi (White)',
      'WKF-Approved Red & Blue Fist Mitts',
      'Standard High-Density Shin & Instep Guards',
      'Custom Fitted Mouthguard & Groin Protector'
    ]
  },

  'taekwondo': {
    id: 'taekwondo',
    categoryBadge: '// OLYMPIC DISCIPLINE',
    badgeColor: 'gold',
    accreditationBadge: 'WORLD TAEKWONDO (WT) / KUKKIWON CERTIFIED',
    titleMain: 'OLYMPIC',
    titleAccent: 'TAEKWONDO.',
    leadDesc: 'Lightning-fast high-altitude kicks, rapid-fire paddle combinations, and Olympic-level sparring tactics. Master agility, cardiovascular conditioning, and precision point sparring.',
    leadMaster: 'Sensei Elena Cruz (4th Dan)',
    difficulty: 'Cadet to Adult (Yellow–Black)',
    frequency: '4 Days / Week Available',
    heroImage: 'assets/images/programs/program-taekwondo.jpg',
    heroAlt: 'WT Olympic Taekwondo High Jump Kick',
    overviewTitle: 'ABOUT THE OLYMPIC TAEKWONDO CURRICULUM',
    overviewText1: 'Olympic Taekwondo is celebrated worldwide for its dynamic kicking speed, footwork agility, and precision head-height targeting. At KAI, training adheres strictly to World Taekwondo (WT) Olympic standards and Kukkiwon Dan grading criteria.',
    overviewText2: 'Our high-performance program pairs Olympic tactical footwork with speed paddle drills, electronic chest-guard scoring simulations, and high-velocity spinning counter kicks.',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Kicking Kinetics & Chamber Speed',
        desc: 'Development of whip-like front kick (Ap Chagi), roundhouse (Dollyo Chagi), and axe kick (Naeryo Chagi) with instant retraction mechanics.'
      },
      {
        phase: 'PHASE 02',
        title: 'Spinning & Aerial Counters',
        desc: 'Precision rotational power in back kick (Dwi Chagi), tornado kick (Dolgae Chagi), and spinning hook kick (Huryeo Chagi).'
      },
      {
        phase: 'PHASE 03',
        title: 'Olympic Footwork & Cut Kicks',
        desc: 'Lateral angle shifting, push-kick barrier control, fast-step advances, and intercepting lunges designed for point accumulation.'
      },
      {
        phase: 'PHASE 04',
        title: 'Taegeuk Poomsae & Sparring IQ',
        desc: 'Formal WT Poomsae forms (Il Jang through Pal Jang) combined with full-contact Daedo-style electronic scoring simulations.'
      }
    ],
    schedule: [
      { day: 'Monday & Wednesday', time: '06:00 PM – 07:15 PM', level: 'Cadet & Adult Sparring', dojo: 'Tatami Alpha' },
      { day: 'Thursday', time: '05:30 PM – 06:45 PM', level: 'Poomsae & Kicking Kinetics', dojo: 'Tatami Beta' },
      { day: 'Saturday', time: '11:00 AM – 12:45 PM', level: 'Tournament Fight Team (Invite Only)', dojo: 'Tatami Alpha' }
    ],
    outcomes: [
      'Exceptional lower-body flexibility, balance, and hip mobility',
      'Blistering kicking speed exceeding 30 mph with pinpoint accuracy',
      'Superior cardiovascular stamina and aerobic endurance',
      'Tournament-tested tactical reflexes and competition composure'
    ],
    gear: [
      'Official WT V-Neck White Dobok with Black Collar (Dan)',
      'Reversible Blue/Red Hogu Chest Protector & Headgear',
      'WT-Approved Forearm, Shin Guards & Instep Sensors',
      'Mouthguard & Non-Slip Combat Sparring Slippers'
    ]
  },

  'self-defense': {
    id: 'self-defense',
    categoryBadge: '// REAL-WORLD COMBATIVES',
    badgeColor: 'vermilion',
    accreditationBadge: 'REALITY-BASED DEFENSE ACCREDITED',
    titleMain: 'WOMEN’S PRACTICAL',
    titleAccent: 'SELF-DEFENSE.',
    leadDesc: 'Battle-proven biomechanical escape techniques engineered for smaller practitioners against larger, aggressive assailants. Real-world boundary control, joint locks, and emergency counters.',
    leadMaster: 'Sensei Priya Sharma (3rd Dan)',
    difficulty: 'All Fitness Levels (No Experience Needed)',
    frequency: '3 Days / Week Available',
    heroImage: 'assets/images/programs/program-self-defense.jpg',
    heroAlt: "Women's Practical Self-Defense Counter Strike",
    overviewTitle: 'ABOUT THE REALITY-BASED DEFENSE CURRICULUM',
    overviewText1: 'Traditional tournament rules do not apply on the street. Our Women’s Self-Defense curriculum strips away athletic acrobatics and replaces them with instinctive, gross-motor survival biomechanics designed for high-stress adrenal environments.',
    overviewText2: 'Students learn situational threat recognition, vocal de-escalation boundaries, explosive wrist release leverage, anti-grab framing, and decisive vulnerable-target counters (eyes, throat, groin, shins).',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Situational Awareness & Stance',
        desc: 'Color codes of awareness (Cooper’s scale), reactionary gap maintenance, assertive verbal boundary commands, and defensive framing.'
      },
      {
        phase: 'PHASE 02',
        title: 'Wrist Releases & Choke Escapes',
        desc: 'Biomechanical escapes against single/double wrist grabs, rear shirt pulls, front throat chokes, and wall pins using rotational leverage.'
      },
      {
        phase: 'PHASE 03',
        title: 'Gross-Motor Impact Counters',
        desc: 'Hammerfists, palm strikes, heel kicks to shins, and close-quarter elbow strikes designed to create immediate escape opportunities.'
      },
      {
        phase: 'PHASE 04',
        title: 'Ground Defense & Stress Drills',
        desc: 'Technical get-ups from the floor, guard retention against pinned mounts, adrenal stress testing, and emergency exit sprinting.'
      }
    ],
    schedule: [
      { day: 'Tuesday & Thursday', time: '10:00 AM – 11:15 AM', level: 'Morning Practical Combatives', dojo: 'Tatami Beta' },
      { day: 'Wednesday', time: '07:30 PM – 08:30 PM', level: 'Evening Defense & Escape Workshop', dojo: 'Tatami Beta' },
      { day: 'Saturday', time: '01:30 PM – 03:00 PM', level: 'Adrenal Stress Scenario Lab', dojo: 'Tactical Area' }
    ],
    outcomes: [
      'Unshakeable situational confidence and calm demeanor in public spaces',
      'Effortless escape leverage against opponents twice your physical weight',
      'Overcoming adrenal freeze reflex through repetitive stress habituation',
      'Practical legal awareness regarding justifiable self-defense force'
    ],
    gear: [
      'Comfortable Athletic Workout Attire (or Dojo T-Shirt)',
      'Padded Forearm Impact Guards (Provided by Dojo)',
      'Training Focus Mitts (Provided by Dojo)',
      'Hydration Bottle & Towel'
    ]
  },

  'little-tigers': {
    id: 'little-tigers',
    categoryBadge: '// YOUTH FOUNDATION',
    badgeColor: 'gold',
    accreditationBadge: 'AGE-SPECIFIC PEDIATRIC MARTIAL ARTS',
    titleMain: 'LITTLE TIGERS',
    titleAccent: 'FOUNDATION (AGES 4–8).',
    leadDesc: 'Channel boundless childhood energy into respect, laser focus, physical coordination, and emotional resilience in a structured, joyful dojo environment.',
    leadMaster: 'Sensei Kenji Sato & Assistant Mentors',
    difficulty: 'Preschool & Early Elementary (Ages 4–8)',
    frequency: '4 Days / Week Available',
    heroImage: 'assets/images/programs/program-little-tigers.jpg',
    heroAlt: 'Little Tigers Youth Martial Arts Foundation',
    overviewTitle: 'ABOUT THE LITTLE TIGERS CURRICULUM',
    overviewText1: 'Our Little Tigers program is purposefully crafted around pediatric motor development and positive behavioral reinforcement. We emphasize the core martial arts virtues: "Eyes on the Teacher, Mind on the Task, Respect for Parents."',
    overviewText2: 'Through engaging obstacle agility courses, balance beam kicks, and structured listening games, children develop core stability, anti-bullying confidence, and lifelong manners.',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Dojo Etiquette & Focus Drills',
        desc: 'Proper bowing (Rei), seated quiet focus (Mokuso), immediate response to instructor commands, and tidy gear management.'
      },
      {
        phase: 'PHASE 02',
        title: 'Agility, Balance & Tumbling',
        desc: 'Forward breakfalls, safe rolling mechanics, single-leg flamingo balance tests, and directional agility footwork.'
      },
      {
        phase: 'PHASE 03',
        title: 'Basic Striking & Pad Work',
        desc: 'High-five palm heel strikes, target pad front kicks, chambered loud "Kiai" yells, and controlled blocking reactions.'
      },
      {
        phase: 'PHASE 04',
        title: 'Anti-Bullying & Character Stripes',
        desc: 'Earning home chore stripes, identifying safe adults, standing tall with assertive eye contact, and bully deterrence protocol.'
      }
    ],
    schedule: [
      { day: 'Monday & Wednesday', time: '04:30 PM – 05:15 PM', level: 'Beginner White/Yellow Belts', dojo: 'Tatami Beta' },
      { day: 'Tuesday & Thursday', time: '04:30 PM – 05:15 PM', level: 'Intermediate Stripes (Ages 6-8)', dojo: 'Tatami Beta' },
      { day: 'Saturday', time: '09:30 AM – 10:15 AM', level: 'Family Mat & Tiger Grading', dojo: 'Tatami Beta' }
    ],
    outcomes: [
      'Dramatic improvement in classroom attention span and school focus',
      'Enhanced gross motor balance, spatial awareness, and hand-eye coordination',
      'Polite communication manners: "Yes Sir, Yes Ma’am, Thank You"',
      'Natural bully-resistance through tall posture and verbal assertiveness'
    ],
    gear: [
      'Lightweight Youth White Dogi Uniform with Elastic Waistband',
      'Official White Belt with Character Stripe Loops',
      'Padded Youth Foam Sparring Gloves (for Stripe 3+)',
      'KAI Tiger Passport & Attendance Book'
    ]
  },

  'cadets': {
    id: 'cadets',
    categoryBadge: '// COMPETITION TEAM',
    badgeColor: 'vermilion',
    accreditationBadge: 'NATIONAL CADET CIRCUIT PATHWAY',
    titleMain: 'JUNIOR CADETS',
    titleAccent: 'SPARRING (AGES 9–15).',
    leadDesc: 'Advanced youth martial artists stepping into tactical sparring, tournament bracket preparation, high-intensity conditioning, and junior black belt leadership.',
    leadMaster: 'Sensei Elena Cruz & Coach Marcus Vance',
    difficulty: 'Green Belt & Above (Ages 9–15)',
    frequency: '4 Days / Week Available',
    heroImage: 'assets/images/programs/program-cadets.jpg',
    heroAlt: 'Junior Cadets Competition Sparring Team',
    overviewTitle: 'ABOUT THE JUNIOR CADETS CURRICULUM',
    overviewText1: 'The Junior Cadets division bridges intermediate students into championship-caliber competitive martial arts. Whether aspiring for state titles or building elite adolescent fitness, cadets train under rigorous athletic standards.',
    overviewText2: 'Classes blend high-intensity interval conditioning with tactical point strategy, video review of match scenarios, and mental grit cultivation under championship pressure.',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Combat Cardio & Plyometrics',
        desc: 'Fast-twitch box jumps, lateral ladder drills, core stability, and rotational kettlebell conditioning tailored for youth athletes.'
      },
      {
        phase: 'PHASE 02',
        title: 'Tactical Point Scoring',
        desc: 'Distance baiting, feints, slide-in reverse punches, counter blitzes, and corner trap containment strategies.'
      },
      {
        phase: 'PHASE 03',
        title: 'Championship Ring IQ',
        desc: 'Managing the 2-minute round clock, handling deficit score comebacks, referee scoring angles, and penalty management.'
      },
      {
        phase: 'PHASE 04',
        title: 'Junior Black Belt Leadership',
        desc: 'Assistant coaching for younger tigers, sportsmanship under defeat, humility in victory, and academic honor roll maintenance.'
      }
    ],
    schedule: [
      { day: 'Monday & Wednesday', time: '05:30 PM – 06:45 PM', level: 'Cadet Sparring Tactics', dojo: 'Tatami Alpha' },
      { day: 'Friday', time: '05:00 PM – 06:30 PM', level: 'Full Contact Match Simulations', dojo: 'Tatami Alpha' },
      { day: 'Saturday', time: '02:00 PM – 03:45 PM', level: 'Conditioning & Tournament Prep', dojo: 'Conditioning Zone' }
    ],
    outcomes: [
      'Peak athletic speed, core power, and cardiovascular endurance',
      'Unshakable resilience under competitive pressure and public performance',
      'Direct pathway to National Federation representation and Junior Olympics',
      'Strong leadership qualities and positive peer group mentorship'
    ],
    gear: [
      'Heavyweight KAI Team Uniform with Academy Patch',
      'Sanctioned Headgear, Face Mask & Electronic Foot Sensors',
      'Mouthguard, Chest Guard, and Cadet Fist Protectors',
      'KAI Tournament Gear Duffle Bag'
    ]
  },

  'weapons': {
    id: 'weapons',
    categoryBadge: '// OKINAWAN TRADITION',
    badgeColor: 'gold',
    accreditationBadge: 'AUTHENTIC RYUKYU KOBUDO LINEAGE',
    titleMain: 'KOBUDO & COMBAT',
    titleAccent: 'WEAPONS MASTERCLASS.',
    leadDesc: 'Preserve the sacred Okinawan weapons tradition. Master the physics, balance, and strikes of the Bo Staff, Sai, Tonfa, and Kama under traditional masters.',
    leadMaster: 'Sensei Kenji Sato (4th Dan Kobudo)',
    difficulty: 'Intermediate & Advanced Adults (Brown / Black)',
    frequency: '2 Days / Week Available',
    heroImage: 'assets/images/programs/program-weapons.jpg',
    heroAlt: 'Ryukyu Kobudo Traditional Weapons Masterclass',
    overviewTitle: 'ABOUT THE RYUKYU KOBUDO CURRICULUM',
    overviewText1: 'Weapons training represents the pinnacle of martial arts extension—where the weapon becomes a seamless, natural extension of the practitioner’s spine, hips, and intent.',
    overviewText2: 'Our Kobudo program preserves the classical Ryukyu lineages. Training begins with the 6-foot oak Rokushaku Bo, teaching circular rotational momentum, balance stabilization, and two-handed lever strikes before advancing to dual weapons.',
    syllabus: [
      {
        phase: 'PHASE 01',
        title: 'Bo Staff Fundamentals (Rokushaku Bo)',
        desc: 'Grip transitions, overhead strikes (Shomen Uchi), sweeping thrusts, circular windmill blocks, and classical Bo Katas (Shushi no Kon).'
      },
      {
        phase: 'PHASE 02',
        title: 'Sai Prongs & Defensive Trapping',
        desc: 'Flipping index finger techniques, sword-catching prong parries, direct punching thrusts, and Tsukenshitahaku no Sai kata.'
      },
      {
        phase: 'PHASE 03',
        title: 'Tonfa Rotational Acceleration',
        desc: 'Forearm shield alignments, rapid spinning handle flips, close-quarters hammer blocks, and Hamahiga no Tonfa sequences.'
      },
      {
        phase: 'PHASE 04',
        title: 'Dual Weapon Bunkai & Disarming',
        desc: 'Two-person choreographed pre-arranged combat (Kumibo), weapon-retention under pressure, and unarmed disarming leverage.'
      }
    ],
    schedule: [
      { day: 'Wednesday', time: '08:30 PM – 09:45 PM', level: 'Bo Staff Fundamentals & Kata', dojo: 'Tatami Alpha' },
      { day: 'Saturday', time: '08:00 AM – 09:30 AM', level: 'Advanced Sai & Tonfa Masterclass', dojo: 'Tatami Alpha' }
    ],
    outcomes: [
      'Unmatched forearm grip strength, shoulder mobility, and rotational core power',
      'Deep historical appreciation of ancient Okinawan warrior traditions',
      'Flawless geometric balance and kinetic energy transference through objects',
      'Advanced weapon-disarm reflexes for tactical self-preservation'
    ],
    gear: [
      'Traditional Black Hakama & Heavyweight Gi Jacket',
      'Tapered 6ft Red Oak Rokushaku Bo Staff',
      'Matched Pair of Stainless Steel Octagonal Sais with Leather Wrap',
      'Padded Protective Weapons Training Gloves'
    ]
  }
};

// CONTROLLER: Parse URL param and update program-details.html
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = (urlParams.get('id') || 'shotokan').toLowerCase().trim();
  const program = KAI_PROGRAMS_DATA[requestedId] || KAI_PROGRAMS_DATA['shotokan'];

  // Update Page Title
  document.title = `${program.titleMain} ${program.titleAccent.replace('.', '')} | KAI Martial Arts Curriculum`;

  // Update Section 01: Hero
  const categoryBadge = document.getElementById('progCategoryBadge');
  if (categoryBadge) {
    categoryBadge.textContent = program.categoryBadge;
    categoryBadge.className = `badge-combat ${program.badgeColor}`;
  }

  const accreditationBadge = document.getElementById('progAccreditationBadge');
  if (accreditationBadge) accreditationBadge.textContent = program.accreditationBadge;

  const titleContainer = document.getElementById('progTitle');
  if (titleContainer) {
    titleContainer.innerHTML = `${program.titleMain}<br><span class="text-danger">${program.titleAccent}</span>`;
  }

  const leadDesc = document.getElementById('progLeadDesc');
  if (leadDesc) leadDesc.textContent = program.leadDesc;

  const leadMaster = document.getElementById('progLeadMaster');
  if (leadMaster) leadMaster.textContent = program.leadMaster;

  const difficulty = document.getElementById('progDifficulty');
  if (difficulty) difficulty.textContent = program.difficulty;

  const frequency = document.getElementById('progFrequency');
  if (frequency) frequency.textContent = program.frequency;

  // Book trial link with preselected program
  const bookTrialBtn = document.getElementById('progBookTrialBtn');
  if (bookTrialBtn) {
    bookTrialBtn.href = `contact.html?program=${encodeURIComponent(program.id)}`;
  }

  // Update Hero Image
  const heroImg = document.getElementById('progHeroImg');
  if (heroImg) {
    heroImg.src = program.heroImage;
    heroImg.alt = program.heroAlt;
  }

  // Update Section 02: Overview
  const overviewTitle = document.getElementById('progOverviewTitle');
  if (overviewTitle) overviewTitle.textContent = program.overviewTitle;

  const overviewP1 = document.getElementById('progOverviewP1');
  if (overviewP1) overviewP1.textContent = program.overviewText1;

  const overviewP2 = document.getElementById('progOverviewP2');
  if (overviewP2) overviewP2.textContent = program.overviewText2;

  // Update Syllabus Grid (4 Phases)
  const syllabusContainer = document.getElementById('progSyllabusContainer');
  if (syllabusContainer && program.syllabus) {
    syllabusContainer.innerHTML = program.syllabus.map((item, idx) => `
      <div class="col-md-6">
        <div class="combat-panel p-4 h-100 border-start border-danger border-3">
          <span class="badge-combat ${idx % 2 === 0 ? 'vermilion' : 'gold'} mb-2">${item.phase}</span>
          <h4 class="text-uppercase mb-2 fs-5">${item.title}</h4>
          <p class="text-secondary small mb-0">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Update Class Times Table
  const scheduleBody = document.getElementById('progScheduleBody');
  if (scheduleBody && program.schedule) {
    scheduleBody.innerHTML = program.schedule.map(row => `
      <tr>
        <td class="fw-bold">${row.day}</td>
        <td><span class="badge bg-danger-subtle text-danger px-2 py-1">${row.time}</span></td>
        <td class="text-secondary">${row.level}</td>
        <td class="text-warning">${row.dojo}</td>
      </tr>
    `).join('');
  }

  // Update Outcomes List
  const outcomesContainer = document.getElementById('progOutcomesList');
  if (outcomesContainer && program.outcomes) {
    outcomesContainer.innerHTML = program.outcomes.map(out => `
      <li class="d-flex align-items-start gap-2 mb-3">
        <i class="bi bi-check-circle-fill text-danger fs-5 mt-n1"></i>
        <span>${out}</span>
      </li>
    `).join('');
  }

  // Update Gear List
  const gearContainer = document.getElementById('progGearList');
  if (gearContainer && program.gear) {
    gearContainer.innerHTML = program.gear.map(g => `
      <li class="d-flex align-items-start gap-2 mb-3">
        <i class="bi bi-shield-fill-check text-warning fs-5 mt-n1"></i>
        <span>${g}</span>
      </li>
    `).join('');
  }

  // Update Section 06: Bottom CTA
  const bottomMarker = document.getElementById('progBottomMarker');
  if (bottomMarker) bottomMarker.innerHTML = `// 06 &bull; YOUR FIRST STEP IN ${program.titleMain}`;

  const bottomTitle = document.getElementById('progBottomTitle');
  if (bottomTitle) bottomTitle.textContent = `STEP ONTO THE MAT IN ${program.titleMain}.`;

  const bottomDesc = document.getElementById('progBottomDesc');
  if (bottomDesc) bottomDesc.textContent = `Join a beginner ${program.titleMain} session this week under ${program.leadMaster}. Loaner gear provided for your first trial class.`;

  const bottomTrialBtn = document.getElementById('progBottomTrialBtn');
  if (bottomTrialBtn) {
    bottomTrialBtn.textContent = `Book Free ${program.titleMain} Trial`;
    bottomTrialBtn.href = `contact.html?program=${encodeURIComponent(program.id)}`;
  }
});

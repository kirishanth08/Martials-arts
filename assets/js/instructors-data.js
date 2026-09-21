/**
 * KAI MARTIAL ARTS - INSTRUCTORS DATA & PROFILE CONTROLLER
 * Full instructor profiles, lineage, qualifications, records, and dynamic injection.
 */
const KAI_INSTRUCTORS_DATA = {
  'arjun': {
    id: 'arjun',
    name: 'MASTER ARJUN RAO',
    rankSubtitle: '5TH DAN SHOTOKAN KARATE • DOJO FOUNDER',
    roleBadge: 'HEAD MASTER',
    certBadge: '5TH DAN JKA CERTIFIED',
    portrait: 'assets/images/unique/index-faculty-arjun.jpg',
    actionPhoto: 'assets/images/unique/instructor-details-action.jpg',
    leadBio: 'With 18 years of continuous mat discipline, Master Arjun has represented the national karate team across three continents and personally mentored over 85 students to certified black belt status.',
    stat1Number: '18 YEARS',
    stat1Label: 'Mat Experience',
    stat2Number: '3X GOLD',
    stat2Label: 'Asian Championship',
    stat3Number: '85+ DAN',
    stat3Label: 'Graduates Mentored',
    bioP1: 'Master Arjun began his martial arts journey at age seven under the direct tutelage of Sensei Hiroshi Taniguchi in Osaka, Japan. For six grueling years, his training consisted of dawn kihon repetitions, traditional makiwara striking conditioning, and deep immersion in Shotokan philosophy.',
    bioP2: 'Upon returning home, he competed on the international World Karate Federation (WKF) circuit, capturing gold medals in individual kumite (2014, 2017) and silver in team kata. In 2012, he founded KAI Martial Arts Academy to preserve authentic Japanese standards without commercial compromises.',
    quote: '"Lineage is not about boasting about your teachers\' names; it is about carrying the flame of their technical standard without dropping an ounce of quality."',
    lineage: [
      { year: '1998 - 2004', text: 'Apprentice under Sensei Hiroshi Taniguchi (8th Dan, Osaka)' },
      { year: '2008', text: 'Conferred 3rd Dan Sandan at Tokyo JKA Hombu Dojo' },
      { year: '2016', text: 'Conferred 4th Dan Yondan & Appointed National Referee' },
      { year: '2022', text: 'Conferred 5th Dan Godan with Master Examination Distinction' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'Class-A JKA Examiner', desc: 'Authorized to grade students through all Kyu ranks up to 3rd Dan Black Belt under JKA guidelines.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'WKF International Coach', desc: 'Certified high-performance tournament cornerman for World Karate Federation championship bouts.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Sports Science & Biomechanics', desc: 'Certified Strength & Conditioning Specialist (CSCS) specializing in rotational hip force kinetics.' }
    ],
    records: [
      { year: '2019', tourney: 'World Shotokan Cup, Tokyo', div: 'Men\'s Open Kumite (-75kg)', res: 'GOLD MEDALIST', resColor: 'gold', body: 'Japan Karate Association' },
      { year: '2017', tourney: 'Asian Karate Championship', div: 'Men\'s Senior Kumite', res: 'GOLD MEDALIST', resColor: 'gold', body: 'Asian Karate Federation' },
      { year: '2015', tourney: 'Continental Karate Invitational', div: 'Team Kumite Captain', res: 'TEAM GOLD', resColor: 'gold', body: 'WKF Continental' },
      { year: '2012', tourney: 'National Shotokan Championship', div: 'Men\'s Individual Kata', res: 'SILVER MEDALIST', resColor: 'vermilion', body: 'National Federation' }
    ],
    creedTitle: '"PRECISION IN STILLNESS, POWER IN MOTION."',
    creedP1: '"Most people think martial arts is about violence. It is exactly the opposite. In an age where tempers flare in seconds, the ability to control your breathing, stay completely relaxed in the face of aggression, and strike only when an innocent life is threatened is the hallmark of a true master."',
    creedP2: '"On my mat, ego is stripped away the moment you step through the door. I treat the CEO, the student, and the teenager with the exact same standard. We sweat together, we bow together, and we build mental iron."',
    scheduleNote: 'Master Arjun leads adult Karate classes every Monday, Wednesday, and Friday evening at 07:00 PM, and conducts Sunday morning advanced brown/black belt kata intensives.'
  },

  'elena': {
    id: 'elena',
    name: 'SENSEI ELENA CRUZ',
    rankSubtitle: '4TH DAN WORLD TAEKWONDO • HEAD KICKING COACH',
    roleBadge: 'OLYMPIC COACH',
    certBadge: '4TH DAN WT / KUKKIWON',
    portrait: 'assets/images/unique/index-faculty-elena.jpg',
    actionPhoto: 'assets/images/taekwondo/taekwondo-main.jpg',
    leadBio: 'Former Pan-American Taekwondo champion and certified World Taekwondo international coach specializing in high-velocity rotational strikes, sparring footwork, and junior athlete development.',
    stat1Number: '14 YEARS',
    stat1Label: 'Olympic Mat Time',
    stat2Number: 'PAN-AM',
    stat2Label: 'Gold Medal Champion',
    stat3Number: '60+ MEDALS',
    stat3Label: 'Cadet Team Honors',
    bioP1: 'Elena began training in Seoul, South Korea at age nine, spending eight consecutive summers refining electronic sensor target accuracy and Olympic timing under Grandmaster Park Sang-Min.',
    bioP2: 'Her collegiate athletic career saw back-to-back gold medals at the Pan-American games in featherweight sparring. Today at KAI, Elena directs both our youth cadets competition team and adult Olympic sparring program.',
    quote: '"Speed without accuracy is wasted combustion; accuracy without tactical timing is merely hope. We train both until they become involuntary reflexes."',
    lineage: [
      { year: '2006 - 2012', text: 'Trained at Kukkiwon International Academy (Seoul)' },
      { year: '2014', text: 'Conferred 3rd Dan Kukkiwon & Pan-American Championship Gold' },
      { year: '2018', text: 'Appointed Head Coach of State Youth Taekwondo Team' },
      { year: '2023', text: 'Conferred 4th Dan Black Belt with Master Thesis on Kicking Kinetics' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'World Taekwondo Level-2 Coach', desc: 'Accredited international ringside cornerman for WT G-ranked tournaments.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'Certified Poomsae Judge', desc: 'Licensed national poomsae technical form evaluator and scoring official.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Youth Athletic Conditioning', desc: 'Specialist in pediatric plyometrics, joint flexibility, and growth plate safety.' }
    ],
    records: [
      { year: '2018', tourney: 'Pan-American Championship', div: 'Women\'s Flyweight (-49kg)', res: 'GOLD MEDALIST', resColor: 'gold', body: 'World Taekwondo Pan-Am' },
      { year: '2016', tourney: 'US Open Taekwondo', div: 'Women\'s Senior Sparring', res: 'GOLD MEDALIST', resColor: 'gold', body: 'USA Taekwondo' },
      { year: '2015', tourney: 'Grand Prix Series II', div: 'Olympic Sparring Division', res: 'SILVER MEDALIST', resColor: 'vermilion', body: 'World Taekwondo' },
      { year: '2013', tourney: 'National Cadet Championships', div: 'Head Coach Team Results', res: 'TEAM CHAMPIONS', resColor: 'gold', body: 'National Olympic Committee' }
    ],
    creedTitle: '"CHAMBER FAST, RETRACT FASTER."',
    creedP1: '"Many fighters possess strong kicks, but few master the art of the instant snap and defensive balance recovery. In competition, that fraction of a second between striking and returning your foot to the mat decides whether you score a three-point head kick or get swept."',
    creedP2: '"I demand utter joy and intense discipline from my youth students. When children realize they can control their limbs with surgical precision, their everyday self-confidence soars."',
    scheduleNote: 'Sensei Elena leads Olympic Taekwondo sessions every Monday and Wednesday at 06:00 PM, and directs Junior Cadets competition squad on Saturday mornings at 11:00 AM.'
  },

  'jinwoo': {
    id: 'jinwoo',
    name: 'GRANDMASTER JIN WOO',
    rankSubtitle: '6TH DAN KUKKIWON • TECHNICAL ADVISORY MASTER',
    roleBadge: 'GRANDMASTER',
    certBadge: '6TH DAN KUKKIWON HONBU',
    portrait: 'assets/images/unique/instructors-jinwoo.jpg',
    actionPhoto: 'assets/images/unique/instructors-jinwoo-action.jpg',
    leadBio: 'A venerable figure in classical Korean martial arts with 42 years of teaching distinction, Grandmaster Jin oversees Dan-rank standardization, Yudansha philosophy, and senior instructor certifications.',
    stat1Number: '42 YEARS',
    stat1Label: 'Dojo Leadership',
    stat2Number: '6TH DAN',
    stat2Label: 'Kukkiwon Black Belt',
    stat3Number: '400+ DAN',
    stat3Label: 'Examinations Graded',
    bioP1: 'Grandmaster Jin Woo began training in 1982 in Incheon, studying classical Taekwondo, Tang Soo Do, and Hapkido before modern sport commercialization altered the traditional landscape. He served as chief combat instructor for military police battalions before establishing international dojangs across Asia and North America.',
    bioP2: 'At KAI, Grandmaster Jin chairs the Senior Board of Examiners, ensuring that every black belt bestowed meets the highest global standards of ethical conduct, technical purity, and philosophical depth.',
    quote: '"The board does not hit back, and medals tarnish with time. The true test of your art is how kindly you speak to your family and how courageously you stand for the weak."',
    lineage: [
      { year: '1982 - 1989', text: 'Apprentice at Incheon Central Dojang under GM Kang Min-Hyuk' },
      { year: '1995', text: 'Conferred 4th Dan Master Instructor at Kukkiwon Seoul' },
      { year: '2006', text: 'Conferred 5th Dan & Appointed International Technical Delegate' },
      { year: '2019', text: 'Conferred 6th Dan High Dan Rank by World Taekwondo Headquarters' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'Grandmaster Class-1 Examiner', desc: 'Authorized to adjudicate and confer Kukkiwon Dan ranks 1st through 5th Dan.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'Traditional Hapkido Master', desc: '4th Dan Master in classical joint manipulation, wrist locks, and throws.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Ki Breathing & Meditation', desc: 'Specialist in Dahn-jeon breathing regulation and autonomic nervous system calming.' }
    ],
    records: [
      { year: '1992', tourney: 'Korean National Military Games', div: 'Unarmed Combatives Division', res: 'GOLD MEDALIST', resColor: 'gold', body: 'ROK Armed Forces' },
      { year: '1998', tourney: 'Asian Martial Arts Masters Cup', div: 'Open Master Forms Exhibition', res: 'FIRST PLACE', resColor: 'gold', body: 'World Budo Association' },
      { year: '2004', tourney: 'International Poomsae Invitational', div: 'Master Division 40+', res: 'GOLD MEDALIST', resColor: 'gold', body: 'Kukkiwon Federation' },
      { year: '2015', tourney: 'World Taekwondo Hanmadang', div: 'All-Around Master Division', res: 'LIFETIME MERIT', resColor: 'gold', body: 'Kukkiwon Foundation' }
    ],
    creedTitle: '"THE REEDS BEND; THE OAK SHATTERS."',
    creedP1: '"Hardness without softness is brittle. Softness without structure is water without a vessel. True martial mastery balances iron resolve with humble compassion for all living creatures."',
    creedP2: '"When you are young, you seek to prove yourself against others. When you are mature, you seek only to master the restless turbulence within your own heart."',
    scheduleNote: 'Grandmaster Jin presides over monthly senior Dan examinations and conducts bi-weekly Sunday Yudansha masterclasses.'
  },

  'marcus': {
    id: 'marcus',
    name: 'COACH MARCUS VANCE',
    rankSubtitle: 'TACTICAL COMBATIVES DIRECTOR • STRENGTH & CONDITIONING',
    roleBadge: 'COMBATIVES DIRECTOR',
    certBadge: 'CSCS & TACTICAL INSTRUCTOR',
    portrait: 'assets/images/unique/instructors-marcus.jpg',
    actionPhoto: 'assets/images/karate/karate-kumite.jpg',
    leadBio: 'Former law enforcement defensive tactics coordinator and competitive combat athlete, Coach Vance oversees high-intensity heavy bag conditioning, clinch range infighting, and functional athletic longevity.',
    stat1Number: '15 YEARS',
    stat1Label: 'Tactical Instruction',
    stat2Number: 'CSCS',
    stat2Label: 'Strength Specialist',
    stat3Number: '1,200+',
    stat3Label: 'Athletes Trained',
    bioP1: 'Marcus served nine years as a defensive tactics trainer and SWAT combatives consultant, teaching close-quarter weapon retention, ground escape survivability, and high-threat stress habituation.',
    bioP2: 'At KAI, Marcus directs the Combat Fit Conditioning and Adult Heavy Bag programs. His classes merge modern sports biomechanics with gritty martial conditioning, ensuring practitioners build real athletic durability.',
    quote: '"You will not rise to the level of your expectations in an altercation; you will default to the lowest level of your daily training. Make that level exceptional."',
    lineage: [
      { year: '2007 - 2011', text: 'Police Academy Defensive Tactics Instructor (FLETC Certified)' },
      { year: '2014', text: 'Certified Strength & Conditioning Specialist (NSCA CSCS)' },
      { year: '2018', text: 'Brown Belt BJJ & Krav Maga Expert Instructor Certification' },
      { year: '2023', text: 'Appointed Director of High-Performance Conditioning at KAI' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'NSCA CSCS Certified', desc: 'Elite collegiate and professional sports strength and conditioning credential.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'Defensive Tactics Master Trainer', desc: 'Certified in reality-based edged weapon defense and tactical ground control.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Joint Mobility & Longevity', desc: 'Specialist in tendon protection, rotational core torque, and pre-hab protocols.' }
    ],
    records: [
      { year: '2016', tourney: 'Tactical SWAT Invitational', div: 'Individual Combatives Circuit', res: '1ST PLACE', resColor: 'gold', body: 'National Tactical Officers' },
      { year: '2018', tourney: 'Regional Submission Grappling', div: 'Advanced Heavyweight Division', res: 'GOLD MEDALIST', resColor: 'gold', body: 'IBJJF Open' },
      { year: '2021', tourney: 'Combat Striking Expo', div: 'Heavy Bag Power Output Trial', res: 'RECORD HOLDER', resColor: 'gold', body: 'Martial Science Institute' },
      { year: '2024', tourney: 'National Fitness & Combatives', div: 'Elite Team Coaching Award', res: 'HONORARY CITATION', resColor: 'vermilion', body: 'CSCS Committee' }
    ],
    creedTitle: '"SWEAT SAVES BLOOD."',
    creedP1: '"Conditioning is the supreme equalizer. When two martial artists possess identical technical knowledge, the one who can think clearly under oxygen debt at round five will break the other\'s will every single time."',
    creedP2: '"We do not build show muscle here. We forge functional, rotatable, explosive combat athletes capable of defending their families under total exhaustion."',
    scheduleNote: 'Coach Marcus leads Combat Conditioning and Heavy Bag classes every Monday and Wednesday at 07:30 PM, and conducts Saturday sports science labs at 02:00 PM.'
  },

  'priya': {
    id: 'priya',
    name: 'SENSEI PRIYA SHARMA',
    rankSubtitle: '3RD DAN SELF-DEFENSE SPECIALIST • COMMUNITY ADVOCATE',
    roleBadge: 'DEFENSE DIRECTOR',
    certBadge: '3RD DAN COMBATIVES',
    portrait: 'assets/images/unique/index-faculty-priya.jpg',
    actionPhoto: 'assets/images/self-defense/defense-main.jpg',
    leadBio: 'Nationally recognized women\'s self-defense educator with 12 years of specialized instruction. Master of biomechanical release leverage, boundary setting, and adrenal stress management.',
    stat1Number: '12 YEARS',
    stat1Label: 'Teaching Specialty',
    stat2Number: '2,500+',
    stat2Label: 'Women Empowered',
    stat3Number: '3RD DAN',
    stat3Label: 'Certified Black Belt',
    bioP1: 'Priya began training after encountering a violent mugging attempt at university. That pivotal moment catalyzed a lifelong mission to master the science of non-consensual violence dynamics and biomechanical leverage for smaller-framed individuals.',
    bioP2: 'She has since conducted over 180 practical workshops for universities, corporate firms, and transit worker unions, developing KAI\'s acclaimed 4-Pillar Reality-Based Self-Defense Curriculum.',
    quote: '"Self-defense is not about engaging in a prolonged duel; it is about recognizing the threat early, exploiting the thumb joint or airway, and running home safely to your family."',
    lineage: [
      { year: '2010 - 2015', text: 'Intensive Krav Maga & Jujitsu Study under GM Robert Hayes' },
      { year: '2017', text: 'Conferred 2nd Dan Black Belt in Reality-Based Combatives' },
      { year: '2020', text: 'Founded "DefendHer" Community Safety Initiative across metro area' },
      { year: '2024', text: 'Conferred 3rd Dan Black Belt & Appointed KAI Defense Director' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'Certified Conflict De-escalator', desc: 'Credentialed in verbal boundary management, Cooper\'s awareness, and spatial control.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'Adrenal Stress Instructor', desc: 'Specialized in simulated high-heart-rate reality scenarios using protective suits.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Trauma-Informed Coaching', desc: 'Pioneer of gentle, progressive physical confidence building for violence survivors.' }
    ],
    records: [
      { year: '2019', tourney: 'National Women\'s Martial Arts Federation', div: 'Excellence in Community Teaching', res: 'COMMUNITY AWARD', resColor: 'gold', body: 'NWMAF' },
      { year: '2021', tourney: 'Metropolitan Safety Council', div: 'Civilian Defense Instructor of the Year', res: 'LEADERSHIP MEDAL', resColor: 'gold', body: 'City Safety Board' },
      { year: '2023', tourney: 'Global Self-Defense Summit', div: 'Keynote Speaker & Demonstration', res: 'HONORARY CITATION', resColor: 'gold', body: 'International Defense Forum' },
      { year: '2025', tourney: 'Regional Budo Symposium', div: 'Leverage Mechanics Presentation', res: 'BEST PRACTICUM', resColor: 'vermilion', body: 'Budo Science Society' }
    ],
    creedTitle: '"YOUR BODY IS SACRED TERRITORY."',
    creedP1: '"Aggressors do not choose victims expecting a decisive, biomechanical counter-attack. The moment you look someone in the eye, project zero fear, and utilize gross-motor rotational force, you shatter their script."',
    creedP2: '"I teach my students that their voice is their first weapon, their legs are their escape vehicle, and their elbows are their emergency exit doors."',
    scheduleNote: 'Sensei Priya conducts Women\'s Practical Defense every Tuesday and Thursday morning at 10:00 AM, and hosts Saturday afternoon adrenal stress workshops.'
  },

  'kenji': {
    id: 'kenji',
    name: 'SENSEI KENJI SATO',
    rankSubtitle: '4TH DAN KOBUDO & OKINAWAN WEAPONS MASTER',
    roleBadge: 'WEAPONS MASTER',
    certBadge: '4TH DAN RYUKYU KOBUDO',
    portrait: 'assets/images/unique/instructors-kenji.jpg',
    actionPhoto: 'assets/images/karate/karate-kata.jpg',
    leadBio: 'A 3rd-generation Okinawan Kobudo practitioner preserving classical bo staff, sai, tonfa, and kama kata. Renowned for patient mentorship of Little Tigers youth and weaponry biomechanics.',
    stat1Number: '20 YEARS',
    stat1Label: 'Kobudo Heritage',
    stat2Number: '4TH DAN',
    stat2Label: 'Ryukyu Budo Master',
    stat3Number: '300+',
    stat3Label: 'Little Tigers Mentored',
    bioP1: 'Born in Naha, Okinawa, Kenji grew up in his grandfather\'s coastal dojo, learning the geometric balance and lever mechanics of the 6-foot oak Rokushaku Bo before he ever donned athletic sneakers.',
    bioP2: 'At KAI, Sensei Kenji balances two crucial roles: preserving sacred weapon kata for senior black belts, and directing our Little Tigers program (Ages 4-8), where his infinite patience and warm smile nurture genuine childhood discipline.',
    quote: '"A wooden staff has no life of its own. It reflects only the stillness or chaos inside the person holding it. Calming the mind is the first step to moving the oak."',
    lineage: [
      { year: '1995 - 2005', text: 'Direct apprenticeship under Grandmaster Sato Eisaku in Naha, Okinawa' },
      { year: '2009', text: 'Conferred 2nd Dan Ryukyu Kobudo Hozon Shinkokai' },
      { year: '2016', text: 'Conferred 3rd Dan & Invited to Tour Global Budo Seminars' },
      { year: '2022', text: 'Conferred 4th Dan Master Rank by All-Japan Kobudo Federation' }
    ],
    accreditations: [
      { icon: 'bi-patch-check-fill', color: 'text-danger', title: 'Master Bo & Sai Instructor', desc: 'Certified in traditional 7 classical katas of the Ryukyu Kobudo system.' },
      { icon: 'bi-trophy-fill', color: 'text-warning', title: 'Pediatric Martial Arts Specialist', desc: 'Certified in early childhood motor learning and positive behavior reinforcement.' },
      { icon: 'bi-heart-pulse', color: 'text-danger', title: 'Traditional Makiwara Conditioning', desc: 'Practitioner of classical Okinawan bone density and hand conditioning science.' }
    ],
    records: [
      { year: '2015', tourney: 'Okinawa Traditional Kobudo World Tournament', div: 'Senior Long Weapon (Bo) Division', res: 'GOLD MEDALIST', resColor: 'gold', body: 'Ryukyu Kobudo Society' },
      { year: '2018', tourney: 'All-Japan Budo Exhibition, Kyoto', div: 'Dual Sai Classical Kata', res: 'EXEMPLARY DEMONSTRATION', resColor: 'gold', body: 'Nippon Budokan' },
      { year: '2021', tourney: 'International Martial Arts Heritage Cup', div: 'Okinawan Tonfa Bunkai', res: 'GOLD MEDALIST', resColor: 'gold', body: 'World Kobudo Federation' },
      { year: '2024', tourney: 'Youth Mentorship Excellence Awards', div: 'Pediatric Martial Arts Coach of the Year', res: 'COMMUNITY HONORS', resColor: 'vermilion', body: 'National Youth Sports' }
    ],
    creedTitle: '"RESPECT BEGINS AND ENDS WITH A BOW."',
    creedP1: '"When teaching children, you cannot force discipline through anger. You must make respect feel noble, exciting, and proud. When a 5-year-old child looks you in the eye and bows with true sincerity, their future as an honorable adult is assured."',
    creedP2: '"In our weapons classes, safety and reverence are absolute. We handle ancient tools of survival not to conquer enemies, but to master our own physical posture and focus."',
    scheduleNote: 'Sensei Kenji directs the Little Tigers (Ages 4-8) every weekday afternoon at 04:30 PM, and teaches Kobudo & Weapons Masterclasses on Wednesday evenings and Saturday mornings.'
  }
};

// CONTROLLER: Parse URL param and update instructor-details.html
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = (urlParams.get('id') || 'arjun').toLowerCase().trim();
  const instructor = KAI_INSTRUCTORS_DATA[requestedId] || KAI_INSTRUCTORS_DATA['arjun'];

  // Document Title
  document.title = `${instructor.name} | KAI Martial Arts Faculty`;

  // Hero Section
  const roleBadgeEl = document.getElementById('instRoleBadge');
  if (roleBadgeEl) roleBadgeEl.textContent = instructor.roleBadge;

  const certBadgeEl = document.getElementById('instCertBadge');
  if (certBadgeEl) certBadgeEl.textContent = instructor.certBadge;

  const nameEl = document.getElementById('instName');
  if (nameEl) nameEl.textContent = instructor.name;

  const subtitleEl = document.getElementById('instSubtitle');
  if (subtitleEl) subtitleEl.textContent = instructor.rankSubtitle;

  const leadBioEl = document.getElementById('instLeadBio');
  if (leadBioEl) leadBioEl.textContent = instructor.leadBio;

  const portraitEl = document.getElementById('instPortrait');
  if (portraitEl) {
    portraitEl.src = instructor.portrait;
    portraitEl.alt = instructor.name;
  }

  // Stats
  const stat1NumEl = document.getElementById('instStat1Num');
  if (stat1NumEl) stat1NumEl.textContent = instructor.stat1Number;
  const stat1LblEl = document.getElementById('instStat1Lbl');
  if (stat1LblEl) stat1LblEl.textContent = instructor.stat1Label;

  const stat2NumEl = document.getElementById('instStat2Num');
  if (stat2NumEl) stat2NumEl.textContent = instructor.stat2Number;
  const stat2LblEl = document.getElementById('instStat2Lbl');
  if (stat2LblEl) stat2LblEl.textContent = instructor.stat2Label;

  const stat3NumEl = document.getElementById('instStat3Num');
  if (stat3NumEl) stat3NumEl.textContent = instructor.stat3Number;
  const stat3LblEl = document.getElementById('instStat3Lbl');
  if (stat3LblEl) stat3LblEl.textContent = instructor.stat3Label;

  // Book Class CTA
  const bookBtnEl = document.getElementById('instBookBtn');
  if (bookBtnEl) {
    bookBtnEl.innerHTML = `Book Class with ${instructor.name.split(' ')[1] || instructor.name} <i class="bi bi-arrow-right"></i>`;
    bookBtnEl.href = `contact.html?instructor=${encodeURIComponent(instructor.id)}`;
  }

  // Section 02: Bio & Lineage
  const bioP1El = document.getElementById('instBioP1');
  if (bioP1El) bioP1El.textContent = instructor.bioP1;

  const bioP2El = document.getElementById('instBioP2');
  if (bioP2El) bioP2El.textContent = instructor.bioP2;

  const quoteEl = document.getElementById('instQuote');
  if (quoteEl) quoteEl.textContent = instructor.quote;

  const lineageListEl = document.getElementById('instLineageList');
  if (lineageListEl && instructor.lineage) {
    lineageListEl.innerHTML = instructor.lineage.map(l => `
      <li class="mb-3 pb-2 border-bottom border-secondary border-opacity-25">
        <strong  class="d-block">${l.year}</strong>
        ${l.text}
      </li>
    `).join('');
  }

  // Section 03: Accreditations
  const accredContainerEl = document.getElementById('instAccredContainer');
  if (accredContainerEl && instructor.accreditations) {
    accredContainerEl.innerHTML = instructor.accreditations.map(a => `
      <div class="col-md-4">
        <div class="combat-panel p-4 text-center h-100">
          <i class="bi ${a.icon} ${a.color} fs-1 mb-2 d-block"></i>
          <h5 class="text-uppercase mb-2">${a.title}</h5>
          <p class="text-secondary small mb-0">${a.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Section 04: Records
  const recordsBodyEl = document.getElementById('instRecordsBody');
  if (recordsBodyEl && instructor.records) {
    recordsBodyEl.innerHTML = instructor.records.map(r => `
      <tr>
        <td><strong>${r.year}</strong></td>
        <td>${r.tourney}</td>
        <td>${r.div}</td>
        <td><span class="badge-combat ${r.resColor}">${r.res}</span></td>
        <td>${r.body}</td>
      </tr>
    `).join('');
  }

  // Section 05: Creed & Action Photo
  const creedTitleEl = document.getElementById('instCreedTitle');
  if (creedTitleEl) creedTitleEl.textContent = instructor.creedTitle;

  const creedP1El = document.getElementById('instCreedP1');
  if (creedP1El) creedP1El.textContent = instructor.creedP1;

  const creedP2El = document.getElementById('instCreedP2');
  if (creedP2El) creedP2El.textContent = instructor.creedP2;

  const creedAuthorEl = document.getElementById('instCreedAuthor');
  if (creedAuthorEl) creedAuthorEl.textContent = instructor.name;

  const creedSubEl = document.getElementById('instCreedSub');
  if (creedSubEl) creedSubEl.textContent = instructor.rankSubtitle;

  const actionPhotoEl = document.getElementById('instActionPhoto');
  if (actionPhotoEl) {
    actionPhotoEl.src = instructor.actionPhoto;
    actionPhotoEl.alt = `${instructor.name} Action Demonstration`;
  }

  // Section 06: Bottom CTA
  const bottomMarkerEl = document.getElementById('instBottomMarker');
  if (bottomMarkerEl) bottomMarkerEl.textContent = `// 06 • TRAIN WITH ${instructor.name}`;

  const bottomTitleEl = document.getElementById('instBottomTitle');
  if (bottomTitleEl) bottomTitleEl.textContent = `READY TO LEARN FROM ${instructor.name}?`;

  const scheduleNoteEl = document.getElementById('instScheduleNote');
  if (scheduleNoteEl) scheduleNoteEl.textContent = instructor.scheduleNote;

  const bottomTrialBtnEl = document.getElementById('instBottomTrialBtn');
  if (bottomTrialBtnEl) {
    bottomTrialBtnEl.textContent = `Book Free Trial Class With ${instructor.name.split(' ')[1] || instructor.name}`;
    bottomTrialBtnEl.href = `contact.html?instructor=${encodeURIComponent(instructor.id)}`;
  }
});

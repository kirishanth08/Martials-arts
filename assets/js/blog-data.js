/**
 * KAI MARTIAL ARTS - BLOG DATA & ARTICLE CONTROLLER
 * Full article texts, takeaways, metadata, and dynamic DOM injection.
 */
const KAI_BLOG_DATA = {
  'discipline': {
    id: 'discipline',
    category: 'MARTIAL DISCIPLINE',
    readTime: '7 Min Read',
    date: 'Sept 12, 2026',
    title: 'WHY DISCIPLINE SURPASSES MOTIVATION ON THE MAT',
    author: 'Master Arjun Rao',
    authorRole: '5th Dan Head Instructor • KAI Founder',
    authorAvatar: 'assets/images/instructors/arjun-rao.jpg',
    featuredImage: 'assets/images/blog/blog-discipline-featured.jpg',
    featuredAlt: 'Martial Arts Class in Mokuso Bowing',
    takeaways: [
      'Motivation is an unreliable neurochemical high; discipline is a trained autonomic system habit.',
      'Showing up on days when enthusiasm is zero creates 80% of actual technical and character progression.',
      'Ritualized physical actions (bowing at the threshold, tying your belt) signal the brain to enter hyper-focused states.',
      'True mastery on the tatami begins when romanticized novelty is replaced by deliberate repetition.'
    ],
    paragraphs: [
      'Every September, dojos across the world experience an influx of eager beginners. They purchase pristine heavyweight dogis, download training apps, and announce their ambitions of achieving a black belt within three years. By mid-November, more than sixty percent of those white belts have vacated the tatami.',
      'The reason is not a deficit of athletic potential, nor is it the physical difficulty of reverse punches or stance transitions. It is a fundamental misunderstanding of the engine that drives mastery: the fatal reliance on motivation rather than discipline.',
      'Motivation is a biological sprint. It is fueled by dopamine, excitement, and the alluring mental projection of who you might become. But neurochemically, dopamine is fleeting. It cannot sustain you through the tenth round of sparring on a freezing Tuesday evening when your shins are tender and your workplace was exhausting.',
      'Discipline, by stark contrast, is deliberate architecture. It asks nothing of your emotions. When you treat training as an unconditional non-negotiable appointment—identical to breathing or fulfilling an oath—you liberate yourself from the tyranny of asking, "Do I feel like training today?" The master bows onto the tatami not because feelings dictate it, but because the threshold exists to be crossed.',
      'In traditional Shotokan, this mental state is referred to as "Mushin"—mind without mind. In modern athletic psychology, it is termed autonomic behavioral consistency. When you remove daily debate, consistency becomes your default state. And in the combat arts, relentless consistency will dismantle intermittent brilliance every single time.'
    ],
    related: ['defense-principles', 'belt-journey', 'bassai-dai']
  },

  'defense-principles': {
    id: 'defense-principles',
    category: 'SELF-DEFENSE',
    readTime: '5 Min Read',
    date: 'Sept 10, 2026',
    title: '5 PRACTICAL DEFENSE PRINCIPLES EVERY COMMUTER SHOULD KNOW',
    author: 'Sensei Priya Sharma',
    authorRole: '3rd Dan Self-Defense Specialist & Director',
    authorAvatar: 'assets/images/instructors/priya-sharma.jpg',
    featuredImage: 'assets/images/blog/blog-self-defense.jpg',
    featuredAlt: 'Practical Self-Defense Wrist Release Drill',
    takeaways: [
      'The safest self-defense counter is early environmental detection before an attacker enters your reactionary bubble.',
      'Never allow headphones or digital screens to isolate your auditory and peripheral awareness in transit hubs.',
      'Biomechanical releases rely on the opponent’s thumb joint—the anatomical weak point of any grip.',
      'Create noise, command space assertively, and sprint toward populated exits immediately after executing a release.'
    ],
    paragraphs: [
      'Public transit networks, parking garages, and evening train platforms present unique tactical environments. Unlike a brightly lit, padded dojo with rules and referees, real-world altercations occur in cramped spaces, often with poor lighting and unequal physical leverage.',
      'The most critical principle of self-preservation is what Colonel Jeff Cooper designated "Condition Yellow"—relaxed but active environmental vigilance. When walking through a subway station, keeping your eyes up, posture tall, and eliminating noise-canceling headphones prevents you from being selected as an easy target by predatory opportunists.',
      'Second, respect your personal perimeter. If an approaching stranger breaches within two arm lengths (approximately six feet), immediately bring both hands up into an open, non-combative palm gesture near chest height. This serves two purposes: it creates a physical and psychological fence, and places your hands in an optimal guard position without provoking unnecessary escalation.',
      'Third, understand the anatomy of human grips. Whether someone seizes your wrist or lapel, human fingers cannot maintain clamping force against their own thumb. By rotating your forearm against the attacker’s thumb line while stepping your center of mass backward, you generate effortless escape leverage regardless of the assailant’s size.',
      'Finally, remember that the objective of civilian self-defense is escape, never prolonged domination. Execute a decisive release, deploy a vocal command that alerts bystanders, and run immediately toward safety.'
    ],
    related: ['discipline', 'focus-children', 'recovery-nutrition']
  },

  'belt-journey': {
    id: 'belt-journey',
    category: 'PHILOSOPHY',
    readTime: '8 Min Read',
    date: 'Sept 06, 2026',
    title: 'THE JOURNEY FROM WHITE TO BLACK BELT: THE PSYCHOLOGICAL STAGES',
    author: 'Grandmaster Jin Woo',
    authorRole: '6th Dan Kukkiwon & Technical Advisory Master',
    authorAvatar: 'assets/images/unique/instructors-jinwoo.jpg',
    featuredImage: 'assets/images/blog/blog-belt-journey.jpg',
    featuredAlt: 'Martial Arts Belts and Training Equipment',
    takeaways: [
      'The White Belt stage is defined by conscious incompetence; humility and patience are essential.',
      'Green and Blue belts frequently encounter the "intermediate plateau" where technical progression feels invisible.',
      'Brown Belt demands refinement of subtlety, pacing, and pedagogical mentoring of lower ranks.',
      'A Black Belt (Shodan) is not the finish line—it signifies reaching the true starting line of authentic martial study.'
    ],
    paragraphs: [
      'A martial arts belt is far more than dyed cotton holding a jacket closed; it is an external mirror of internal cognitive and emotional transformation. Over my four decades on the tatami, I have watched thousands of practitioners navigate this progression. While uniforms differ across styles, the psychological hurdles are remarkably universal.',
      'The White to Yellow phase is an era of sheer sensory overload. The novice must learn to coordinate hips, breath, stances, and etiquette simultaneously. Ego takes frequent blows, but curiosity and rapid initial gains provide intense satisfaction.',
      'The danger zone arrives at Green and Blue belts—what instructors term the "Intermediate Plateau." The rapid initial improvements plateau, katas become intricate, and sparring partners hit harder. This is where seventy percent of students abandon their journey. Those who push through realize that plateauing is where the nervous system consolidates complex movement into unconscious muscle memory.',
      'Brown belts experience a profound cognitive shift. Technique is no longer mechanical; it becomes adaptive. The brown belt learns to read subtle micro-tells in an opponent’s shoulders, economize motion, and guide white belts with compassion.',
      'When Shodan (1st Degree Black Belt) is finally bestowed, the seasoned practitioner experiences quiet humility rather than triumphant arrogance. "Sho" translates to beginning, and "Dan" to step. You have simply mastered the alphabet; now you begin writing the poetry of combat.'
    ],
    related: ['discipline', 'taekwondo-kinetics', 'bassai-dai']
  },

  'taekwondo-kinetics': {
    id: 'taekwondo-kinetics',
    category: 'TECHNIQUE',
    readTime: '6 Min Read',
    date: 'Aug 29, 2026',
    title: 'TAEKWONDO KICKING KINETICS: SPEED, SNAP & HIP ROTATION',
    author: 'Sensei Elena Cruz',
    authorRole: '4th Dan World Taekwondo & Head Kicking Coach',
    authorAvatar: 'assets/images/instructors/elena-cruz.jpg',
    featuredImage: 'assets/images/blog/blog-tkd-kick.jpg',
    featuredAlt: 'Olympic Taekwondo High Kick Demonstration',
    takeaways: [
      'High kicking velocity originates in the planted support foot pivot, not the swinging quadriceps.',
      'The chamber phase acts as a compressed spring; tighter chambering produces faster terminal extension.',
      'Retraction (whip recoil) must match or exceed striking speed to prevent leg capture and ensure balance.',
      'Core rotational torque provides up to 65% of the total kinetic energy delivered on target impact.'
    ],
    paragraphs: [
      'In high-speed Olympic Taekwondo sparring, a roundhouse kick (Dollyo Chagi) reaches its target in under 0.22 seconds—faster than the human visual reflex can consciously process. To the untrained eye, this appears as pure leg speed. To a biomechanist, it is a magnificent chain reaction of kinetic sequencing.',
      'The secret of championship kicking power lies entirely in the planted pivot foot. Prior to the striking knee chambering upward, the supporting foot must pivot a full 180 degrees away from the target line. This unlocks the pelvic girdle, allowing the striking hip to roll over completely and align femur, tibia, and torso along an unobstructed geometric plane.',
      'Next is the compression chamber. Just as a slingshot must be drawn backward before projectile release, the striking knee must be tightly folded to the chest before extension. Extending prematurely turns a whip into a heavy wooden club, dramatically slowing down velocity.',
      'Finally, we emphasize the rapid recoil. Many amateur kickers allow their leg to drop heavily after hitting the paddle. In competition, an unretracted leg is an invitation to be swept, countered, or penalized. Snapping the heel back to the hamstring immediately after point impact preserves instantaneous defensive balance.'
    ],
    related: ['discipline', 'belt-journey', 'recovery-nutrition']
  },

  'focus-children': {
    id: 'focus-children',
    category: 'YOUTH DEVELOPMENT',
    readTime: '5 Min Read',
    date: 'Aug 22, 2026',
    title: 'BUILDING UNSHAKABLE FOCUS IN CHILDREN THROUGH KARATE',
    author: 'Sensei Kenji Sato',
    authorRole: '4th Dan Youth Program Mentor & Kobudo Master',
    authorAvatar: 'assets/images/instructors/kenji-sato.jpg',
    featuredImage: 'assets/images/blog/blog-kids-karate.jpg',
    featuredAlt: 'Children in Martial Arts Class with Focus',
    takeaways: [
      'Structured ritual and etiquette (bowing, lined formation) provide children with clear psychological safety boundaries.',
      'Immediate tactile feedback on focus pads teaches youth the direct correlation between attention and success.',
      'Dojo principles extend into school: posture, eye contact, and respectful vocal acknowledgment.',
      'Physical mastery of complex gross-motor challenges builds genuine internal self-esteem rather than shallow praise.'
    ],
    paragraphs: [
      'In an era dominated by rapid digital stimuli, tablets, and short-form algorithms, the modern child faces unprecedented challenges to sustained attention. Parents frequently arrive at our academy seeking an antidote to distractibility, fidgeting, and impulsiveness.',
      'The traditional dojo environment offers a powerful, research-backed cognitive sanctuary. From the second a 6-year-old removes their street shoes and bows across the wooden threshold, digital noise ceases. There are no screens, no notifications, and no passive consumption.',
      'Through repetitive kihon drills, children engage both cerebral hemispheres simultaneously. Balancing on one foot while coordinating an opposite-side punch forces the brain’s cerebellum and prefrontal cortex to establish dense neural pathways governing impulse control.',
      'Furthermore, the dojo teaches that respect is not subservience, but empowerment. When a child looks an adult instructor in the eye and responds with a crisp, confident "Yes Sir," they internalize their own dignity and agency. That newfound posture transforms how they interact with teachers, peers, and homework at home.'
    ],
    related: ['discipline', 'defense-principles', 'recovery-nutrition']
  },

  'recovery-nutrition': {
    id: 'recovery-nutrition',
    category: 'ATHLETIC LONGEVITY',
    readTime: '7 Min Read',
    date: 'Aug 15, 2026',
    title: 'RECOVERY & NUTRITION FOR COMBAT ATHLETES: PROTECTING JOINTS & TENDONS',
    author: 'Coach Marcus Vance',
    authorRole: 'Strength & Conditioning Director • Tactical Specialist',
    authorAvatar: 'assets/images/instructors/marcus-vance.jpg',
    featuredImage: 'assets/images/blog/blog-recovery-mobility.jpg',
    featuredAlt: 'Martial Arts Mobility, Joint Health and Tendon Recovery',
    takeaways: [
      'Tendons and ligaments have 10x lower vascular blood flow than muscle tissue, requiring deliberate collagen support.',
      'Post-sparring rehydration must include balanced electrolytes (sodium, potassium, magnesium) to prevent neural cramping.',
      'Active recovery sessions (mobility flows, foam rolling) clear metabolic fatigue faster than complete bed rest.',
      'Adequate sleep (7.5 to 9 hours) is when 95% of human growth hormone release repairs micro-trauma from heavy impact.'
    ],
    paragraphs: [
      'Combat arts place extraordinary physiological demands upon connective tissue. Unlike linear running or stationary weightlifting, martial arts involve explosive deceleration, rotational torquing, ballistic impacts, and sudden directional shifts. Without intelligent recovery protocols, even the most passionate athlete will succumb to chronic overuse injuries.',
      'The primary vulnerability for karateka and taekwondo practitioners is connective joint tissue: patellar tendons, ACLs, labrums, and Achilles tendons. Because tendon tissue has minimal direct capillary blood flow, recovery takes significantly longer than skeletal muscle repair.',
      'Athletes should prioritize hydrolyzed collagen peptide intake paired with Vitamin C thirty to forty minutes prior to warm-up. Studies have shown this specific timing increases collagen synthesis across loaded tendon structures during subsequent impact training.',
      'Hydration is equally misunderstood. Gulping plain tap water after two hours of heavy sparring merely dilutes systemic blood volume. You must replenish the mineral salts lost in sweat—particularly sodium and potassium—to sustain cellular ATP pump mechanics and stave off nocturnal calf spasms.',
      'Finally, prioritize sleep architecture. Growth hormone and testosterone secretion peak during slow-wave Deep Stage 3 sleep. If you cut your sleep from 8 hours to 6 hours, your rate of soft tissue repair decreases by over forty percent. Train with intensity, but recover with religious dedication.'
    ],
    related: ['discipline', 'taekwondo-kinetics', 'belt-journey']
  },

  'bassai-dai': {
    id: 'bassai-dai',
    category: 'KATA ANALYSIS',
    readTime: '6 Min Read',
    date: 'Aug 08, 2026',
    title: 'THE SECRET ARCHITECTURE OF BASSAI DAI: STORMING THE FORTRESS',
    author: 'Master Arjun Rao',
    authorRole: '5th Dan Head Instructor • KAI Founder',
    authorAvatar: 'assets/images/instructors/arjun-rao.jpg',
    featuredImage: 'assets/images/blog/blog-kata-bassai.jpg',
    featuredAlt: 'Shotokan Karate Kata Bassai Dai Demonstration',
    takeaways: [
      'Bassai Dai translates to "To Penetrate / Storm a Fortress"—it trains fighting from disadvantaged positions.',
      'The opening double-fist salute and rapid hip twist teach explosive extraction from rear collar seizures.',
      'Dynamic rhythm changes (explosive bursts alternating with deliberate compression) represent combat pacing.',
      'Every movement holds lethal close-quarters bunkai applications: sweeps, joint dislocations, and throat strikes.'
    ],
    paragraphs: [
      'Among the classical katas of Shotokan and Shito-Ryu, few hold the majestic ferocity and technical depth of Bassai Dai. Named for the tactical endeavor of storming a castle fortification, the form was engineered for a warrior who finds themselves surrounded, trapped, or ambushed at close quarters.',
      'Unlike introductory Heian forms which emphasize long-range linear engagement, Bassai Dai teaches the practitioner how to overturn disadvantage into decisive dominance. The very first move—bringing the left palm over the right fist at the chest followed by a sudden cross-step and rotational hip thrust—is not ceremonial greeting. It is an explosive break against a two-handed grab from behind.',
      'Throughout its 42 movements, the kata shifts abruptly between dynamic expansion and coiled compression. In modern kumite, rhythm is weaponized; the fighter who can instantaneously switch from stationary stillness to blinding acceleration holds an insurmountable tactical edge.',
      'Bunkai (practical application) reveals that Bassai Dai is essentially an encyclopedic manual of close-quarters wrestling counters. It includes knee sweeps (Ashi Barai), solar plexus hammerfists, sweeping forearm lever defenses against bo staves, and throat manipulations. To perform Bassai Dai with understanding is to touch the authentic martial roots of ancient Ryukyu.'
    ],
    related: ['discipline', 'belt-journey', 'taekwondo-kinetics']
  }
};

// CONTROLLER: Parse URL param and update blog-details.html
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = (urlParams.get('id') || 'discipline').toLowerCase().trim();
  const article = KAI_BLOG_DATA[requestedId] || KAI_BLOG_DATA['discipline'];

  // Document Title
  document.title = `${article.title} | KAI Martial Arts Journal`;

  // Hero Section
  const categoryEl = document.getElementById('blogArticleCategory');
  if (categoryEl) categoryEl.textContent = article.category;

  const metaEl = document.getElementById('blogArticleMeta');
  if (metaEl) metaEl.innerHTML = `&bull; ${article.readTime} &bull; Published ${article.date}`;

  const titleEl = document.getElementById('blogArticleTitle');
  if (titleEl) titleEl.textContent = article.title;

  const authorNameEl = document.getElementById('blogArticleAuthorName');
  if (authorNameEl) authorNameEl.textContent = article.author;

  const authorRoleEl = document.getElementById('blogArticleAuthorRole');
  if (authorRoleEl) authorRoleEl.textContent = article.authorRole;

  const authorAvatarEl = document.getElementById('blogArticleAuthorAvatar');
  if (authorAvatarEl) {
    authorAvatarEl.src = article.authorAvatar;
    authorAvatarEl.alt = article.author;
  }

  // Featured Image
  const featuredImgEl = document.getElementById('blogArticleFeaturedImg');
  if (featuredImgEl) {
    featuredImgEl.src = article.featuredImage;
    featuredImgEl.alt = article.featuredAlt;
  }

  // Takeaways Box
  const takeawaysListEl = document.getElementById('blogArticleTakeaways');
  if (takeawaysListEl && article.takeaways) {
    takeawaysListEl.innerHTML = article.takeaways.map(t => `
      <li class="d-flex align-items-start gap-2 mb-2">
        <i class="bi bi-check-circle-fill text-danger mt-1"></i>
        <span>${t}</span>
      </li>
    `).join('');
  }

  // Article Body Paragraphs
  const bodyContainerEl = document.getElementById('blogArticleBody');
  if (bodyContainerEl && article.paragraphs) {
    bodyContainerEl.innerHTML = article.paragraphs.map(p => `
      <p class="lead text-secondary mb-4" style="font-size: 1.125rem; line-height: 1.85;">
        ${p}
      </p>
    `).join('');
  }

  // Related Articles
  const relatedContainerEl = document.getElementById('blogRelatedArticles');
  if (relatedContainerEl && article.related) {
    relatedContainerEl.innerHTML = article.related.map(relId => {
      const relPost = KAI_BLOG_DATA[relId];
      if (!relPost) return '';
      return `
        <div class="col-md-4">
          <div class="combat-panel p-3 h-100 d-flex flex-column">
            <img src="${relPost.featuredImage}" alt="${relPost.title}" class="img-fluid mb-3 w-100" style="height: 180px; object-fit: cover;">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge-combat vermilion small">${relPost.category}</span>
              <span class="small text-muted">${relPost.readTime}</span>
            </div>
            <h5 class="fs-6 mb-2">
              <a href="blog-details.html?id=${relPost.id}" class="text-reset">${relPost.title}</a>
            </h5>
            <div class="pt-2 border-top border-secondary border-opacity-25 mt-auto d-flex justify-content-between align-items-center">
              <small class="text-muted">${relPost.author}</small>
              <a href="blog-details.html?id=${relPost.id}" class="text-danger fw-bold small text-uppercase">Read <i class="bi bi-chevron-right"></i></a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
});

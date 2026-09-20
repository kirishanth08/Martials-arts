const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UA = 'CoolMartialArtsSite/1.0 (https://github.com/myuser; myuser@gmail.com)';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded -> ${dest} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const downloads = [
  // 1. home2-hero: Beach sunset karate kata
  {
    dest: 'assets/images/unique/home2-hero.jpg',
    url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&auto=format&fit=crop&q=85'
  },
  // 2. home2-svc-karate: WKF Female Kata Championship
  {
    dest: 'assets/images/unique/home2-svc-karate.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/K1PL_Berlin_2018-09-16_Female_Kata_108.jpg/1280px-K1PL_Berlin_2018-09-16_Female_Kata_108.jpg'
  },
  // 3. home2-svc-taekwondo: Taekwondo Competition
  {
    dest: 'assets/images/unique/home2-svc-taekwondo.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Daniel_Br%C3%A4nnstam_Taekwondo_Competition.jpg/1280px-Daniel_Br%C3%A4nnstam_Taekwondo_Competition.jpg'
  },
  // 4. home2-svc-defense: Self Defense Tactical Technique
  {
    dest: 'assets/images/unique/home2-svc-defense.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/The_International_Martial_Arts_Self_Defense_Class_%285875244%29.jpg/1280px-The_International_Martial_Arts_Self_Defense_Class_%285875244%29.jpg'
  },
  // 5. home2-svc-fitness: Kyokushin Karate Martial Arts Conditioning
  {
    dest: 'assets/images/unique/home2-svc-fitness.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Disciplina_que_fortalece_cuerpo_y_mente%2C_Club_de_Karate_Musha_Dojo_-_Karate_Kyokushin-Kan.jpg/1280px-Disciplina_que_fortalece_cuerpo_y_mente%2C_Club_de_Karate_Musha_Dojo_-_Karate_Kyokushin-Kan.jpg'
  },
  // 6. home2-svc-vip: Kyokushin Karate Concentration Dojo
  {
    dest: 'assets/images/unique/home2-svc-vip.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Concentraci%C3%B3n_antes_del_movimiento%2C_Club_de_Karate_Musha_Dojo-Karate_Kyokushin-Kan.jpg/1280px-Concentraci%C3%B3n_antes_del_movimiento%2C_Club_de_Karate_Musha_Dojo-Karate_Kyokushin-Kan.jpg'
  },
  // 7. home2-seminar: Martial Arts Instructors seminar
  {
    dest: 'assets/images/unique/home2-seminar.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/One_mind%2C_any_weapon%2C_Marines_become_martial_arts_instructors_130522-M-DS159-122.jpg/1280px-One_mind%2C_any_weapon%2C_Marines_become_martial_arts_instructors_130522-M-DS159-122.jpg'
  },
  // 8. programs-weapons: Authentic Kobudo traditional weapons
  {
    dest: 'assets/images/unique/programs-weapons.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Karate_%2C_entrenamiento_de_Kobudo.jpg/1280px-Karate_%2C_entrenamiento_de_Kobudo.jpg'
  },
  // 9. programs-conditioning: Dojo Kihon and flexibility
  {
    dest: 'assets/images/unique/programs-conditioning.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Karate%2C_pr%C3%A1ctica_de_flexibilidad_en_Musha_Dojo%2C.jpg/1280px-Karate%2C_pr%C3%A1ctica_de_flexibilidad_en_Musha_Dojo%2C.jpg'
  },
  // 10. progdetails-featured: World Championship Kumite Sparring
  {
    dest: 'assets/images/unique/progdetails-featured.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/K1PL_Berlin_2018-09-16_Female_Kumite_%E2%80%9368_kg_26.jpg/1280px-K1PL_Berlin_2018-09-16_Female_Kumite_%E2%80%9368_kg_26.jpg'
  },
  // 11. index-prog-kids: Karate kids in training
  {
    dest: 'assets/images/unique/index-prog-kids.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/JJS_Karate_Kids_on_Training.jpg'
  },
  // 12. index-prog-taekwondo: Taekwondo master high kick
  {
    dest: 'assets/images/unique/index-prog-taekwondo.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Taekwondo_master.jpg'
  }
];

async function run() {
  for (const item of downloads) {
    try {
      await download(item.url, item.dest);
    } catch(e) {
      console.error(`Error downloading ${item.dest}:`, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();

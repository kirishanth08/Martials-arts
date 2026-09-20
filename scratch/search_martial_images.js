const https = require('https');

async function searchCommons(query, limit = 5) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrnamespace=6&gsrlimit=' + limit + '&prop=imageinfo&iiprop=url|size|mime&format=json';
    https.get(url, { headers: { 'User-Agent': 'CoolMartialArtsSite/1.0 (https://github.com/myuser; myuser@gmail.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = [];
          if (json.query && json.query.pages) {
            Object.values(json.query.pages).forEach(p => {
              if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime === 'image/jpeg') {
                results.push({
                  title: p.title,
                  url: p.imageinfo[0].url.split('?')[0],
                  width: p.imageinfo[0].width,
                  height: p.imageinfo[0].height
                });
              }
            });
          }
          resolve(results);
        } catch(e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const categories = [
    'karate kumite',
    'taekwondo competition kick',
    'self-defense martial arts',
    'jujutsu self-defense',
    'judo throw ippon',
    'kids karate dojo',
    'karate dojo training'
  ];
  for (const cat of categories) {
    const res = await searchCommons(cat, 6);
    console.log(`\n=== Category: ${cat} ===`);
    res.forEach(r => console.log(`${r.title} (${r.width}x${r.height}): ${r.url}`));
  }
}

run();

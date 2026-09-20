const https = require('https');
const fs = require('fs');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'CoolMartialArtsSite/1.0 (https://github.com/myuser; myuser@gmail.com)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: { 'User-Agent': 'CoolMartialArtsSite/1.0 (https://github.com/myuser; myuser@gmail.com)' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(fs.statSync(dest).size);
      });
    }).on('error', (e) => {
      fs.unlink(dest, () => {});
      reject(e);
    });
  });
}

async function searchAndGetThumbs(query, limit = 8) {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json`;
  const json = await fetchJson(searchUrl);
  const items = [];
  if (json.query && json.query.pages) {
    for (const page of Object.values(json.query.pages)) {
      if (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].thumburl) {
        items.push({
          title: page.title,
          thumbUrl: page.imageinfo[0].thumbUrl || page.imageinfo[0].thumburl,
          originalUrl: page.imageinfo[0].url
        });
      }
    }
  }
  return items;
}

async function test() {
  const searches = [
    'karate kata',
    'taekwondo competition',
    'self-defense martial arts',
    'jujutsu martial arts',
    'kobudo karate weapon',
    'karate dojo training'
  ];
  for (const s of searches) {
    const results = await searchAndGetThumbs(s, 3);
    console.log(`\n=== Query: ${s} ===`);
    results.forEach(r => console.log(r.title, r.thumbUrl));
  }
}

test();

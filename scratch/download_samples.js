const https = require('https');
const fs = require('fs');

const downloads = [
  {
    name: 'scratch/sample_kumite.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/K1PL_Berlin_2018-09-16_Female_Kumite_%E2%80%9368_kg_26.jpg/800px-K1PL_Berlin_2018-09-16_Female_Kumite_%E2%80%9368_kg_26.jpg'
  },
  {
    name: 'scratch/sample_tkd.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pia_Hoffmann_w%C3%A4hrend_eines_Wettkampfes.jpg/800px-Pia_Hoffmann_w%C3%A4hrend_eines_Wettkampfes.jpg'
  },
  {
    name: 'scratch/sample_defense.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/International_Martial_Arts_and_Self_Defense_Class_%285874917%29.jpg/800px-International_Martial_Arts_and_Self_Defense_Class_%285874917%29.jpg'
  },
  {
    name: 'scratch/sample_kids.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/JJS_Karate_Kids_on_Training.jpg/800px-JJS_Karate_Kids_on_Training.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(item.name);
    https.get(item.url, {
      headers: { 'User-Agent': 'CoolMartialArtsSite/1.0 (https://github.com/myuser; myuser@gmail.com)' }
    }, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.name} (${fs.statSync(item.name).size} bytes)`);
        resolve();
      });
    }).on('error', (e) => {
      console.error(`Failed ${item.name}: ${e.message}`);
      resolve();
    });
  });
}

async function main() {
  for (const item of downloads) {
    await download(item);
  }
}
main();

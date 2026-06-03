const https = require('https');
const query = 'clothing flat lay';
https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=16`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const urls = json.results.map(r => r.id);
    console.log(urls.join('\n'));
  });
});

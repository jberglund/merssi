let Parser = require('rss-parser');
let parser = new Parser();
 
(async () => {
 
  // let feed = await parser.parseURL('https://www.reddit.com/.rss');
  let feed = await parser.parseURL('https://tympanus.net/codrops/feed/');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
 
})();
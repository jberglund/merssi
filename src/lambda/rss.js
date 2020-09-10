import { getRSS } from "../rss/index";
import { formatRSS } from "../rss/format";

const feedsList = [
  "https://tympanus.net/codrops/feed/",
  "https://css-tricks.com/feed/",
];

exports.handler = async (event, context) => {
  let feeds = await getRSS(feedsList);

  return {
    statusCode: 200,
    body: JSON.stringify(formatRSS(feeds)),
  };
};

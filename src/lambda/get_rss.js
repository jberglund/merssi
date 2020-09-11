import { getRSS } from "./rss/index";
import { formatRSS } from "./rss/format";

exports.handler = async (event, context) => {
  // TODO: Add check if empty and if parsing of URL fails
  const queryStringUrl = event.queryStringParameters["url"].split("|");
  console.log(queryStringUrl);

  const rssUrls = Array.isArray(queryStringUrl)
    ? [...queryStringUrl]
    : [queryStringUrl];

  let feeds = await getRSS(rssUrls);

  return {
    statusCode: 200,
    body: JSON.stringify(formatRSS(feeds)),
  };
};

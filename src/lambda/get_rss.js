import { getRSS } from "../rss/index";
import { formatRSS } from "../rss/format";

exports.handler = async (event, context) => {
  const queryStringUrl = event.queryStringParameters.url;
  const rssUrls = Array.isArray(queryStringUrl)
    ? [...queryStringUrl]
    : [queryStringUrl];

  let feeds = await getRSS(rssUrls);

  return {
    statusCode: 200,
    body: JSON.stringify(formatRSS(feeds)),
  };
};

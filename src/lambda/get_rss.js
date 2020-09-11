import { getRSS } from "./rss/index";
import { formatRSS } from "./rss/format";

exports.handler = async (event, context) => {
  const queryStringUrl = event.queryStringParameters["url"].split("|");
  console.log(queryStringUrl);

  const rssUrls = Array.isArray(queryStringUrl)
    ? [...queryStringUrl]
    : [queryStringUrl];

  // console.log({
  //   queryStringUrl,
  //   rssUrls,
  //   isArray: Array.isArray(queryStringUrl),
  // });

  let feeds = await getRSS(rssUrls);

  return {
    statusCode: 200,
    body: JSON.stringify(formatRSS(feeds)),
  };
};

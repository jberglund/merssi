let Parser = require("rss-parser");
let parser = new Parser();

const parseRSSURL = (item) => parser.parseURL(item);

const anAsyncFunction = async (item) => {
  return parseRSSURL(item);
};

export const getRSS = async (list) => {
  // can this be reduce to just one line? With parseRSSURL instead?
  return Promise.all(list.map((item) => anAsyncFunction(item)));
};

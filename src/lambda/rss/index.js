let Parser = require("rss-parser");
let parser = new Parser();

const functionWithAPromise = (item) => parser.parseURL(item);

const anAsyncFunction = async (item) => {
  return functionWithAPromise(item);
};

export const getRSS = async (list) => {
  // TODO: ? check if string or array
  return Promise.all(list.map((item) => anAsyncFunction(item)));
};

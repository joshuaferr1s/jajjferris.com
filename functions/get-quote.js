const quotesRaw = require('./data/quotes.json');

exports.handler = async () => {
  const quote = quotesRaw[Math.floor(Math.random()*quotesRaw.length)];
  return {
    statusCode: 200,
    body: JSON.stringify(quote),
  }
};

const cheerio = require('cheerio');
const request = require('request');
let parser;

request({
    method: 'GET',
    url: 'https://www.e1.ru/'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let title = $('title');

    let div = $('div:first')

    console.log(div.text());
});

module.exports = parser;

const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'https://www.anekdot.ru/'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let div = $('div.text').text();

    console.log(div);
});
require("node-telegram-bot-api");
require("dotenv").config();
const Promise = require('bluebird');
Promise.config({
    cancellation: true
});

var bot = require('./bot');
require('./web')(bot);

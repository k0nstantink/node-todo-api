var mongoose = require('mongoose');
const urlstr = require('./mongodb-uri').uri();
mongoose.connect(urlstr);
mongoose.Promise = global.Promise;
module.exports = {mongoose};
var mongoose = require('mongoose');
const todoUrl = 'mongodb://localhost:27017/TodoApp'
mongoose.Promise = global.Promise;
mongoose.connect(todoUrl);

module.exports = {mongoose};
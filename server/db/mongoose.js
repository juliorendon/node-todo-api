var mongoose = require('mongoose');

// setting mongoose promise to use the global (nodejs) promise
mongoose.Promise = global.Promise;

// Conecting to mongodb
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};

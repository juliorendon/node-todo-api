var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  }
});

module.exports = {
  User
};

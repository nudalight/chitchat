'use strict';

const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
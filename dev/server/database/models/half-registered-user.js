'use strict';

const mongoose = require('mongoose');

let halfRegisteredUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  secretKey: {
    type: String,
    required: true
  },
  registerTimestamp: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('HalfRegisteredUser', halfRegisteredUserSchema);

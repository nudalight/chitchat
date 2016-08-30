'use strict';

const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
  senderId: {
    type: Number,
    required: true
  },
  recepientId: {
    type: Number,
    required: true
  },
  messageText: {
    type: String,
    required: true
  },
  pubTimestamp: {
    type: Number,
    required: true
  },
  modTimestamp: {
    type: Number
  }
});

module.exports = mongoose.model('Message', messageSchema);
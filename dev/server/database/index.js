'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chitchat');

mongoose.connection.on('open', () => {
  console.log("CONNECTED!");
});



let User = require('./models/user.js');






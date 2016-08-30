'use strict';

const express = require('express');
const _ = require('lodash');
const fs = require('fs');



let router = express.Router();



router.use((req, res, next) => {
  console.log('smth is happening');
  next();
});

router.get('/', (req, res, next) => {
  res.json({ message: 'hooray! welcome to our API!' });
  next();
});



app.use('/api', router);


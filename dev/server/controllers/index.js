'use strict';

const express = require('express');
const fs = require('fs');

function indexController(app){

  

  let router = express.Router();

  app.use('/api', router);

  router.use((req, res, next) => {
    console.log('smth is happening');
    next();
  });

  router.get('/', (req, res, next) => {
    res.json({ message: 'hooray! welcome to our API!' });
    next();
  });


  let basename, ctrl = {};

  fs.readdirSync(__dirname).forEach(filename => {
    basename = filename.substr(0, filename.length - 3);
    ctrl[basename] = require('./' + filename);
  });

  router.route('/users')
    .get(ctrl.users.getUserList)
    .post(ctrl.users.createUser)
  ;

  // router.route('/users/:userId')
  //   .get(ctrl.users.getUser)
  //   .put(ctrl.users.updateUser)
  //   .delete(ctrl.users.deleteUser)
  // ;

  router.route('/messages')
    .get(ctrl.messages.getMessageList)
    .post(ctrl.messages.postMessage)
  ;

  router.route('/messages/:messageId')
    .get(ctrl.messages.getMessage)
    .put(ctrl.messages.updateMessage)
    .delete(ctrl.messages.deleteMessage)
  ;

}



module.exports = indexController;

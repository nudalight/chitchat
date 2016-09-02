'use strict';

const crypto = require('crypto');
let User = require('../database/models/user');
let HalfRegisteredUser = require('../database/models/half-registered-user');
let mailer = require('../mailer');



function processEmail(req, res){
  User.find({ email: req.params.email }, (err, users) => {

    if (err) res.send(err);

    if (users){
      // 1.1. если есть, то вернуть ошибку
      res.json({
        'errors': ['User with this email already exists']
      });

    } else {

      HalfRegisteredUser.create({
        email: req.params.email,
        registerTimestamp: new Date()
      }, (err) => {

        if (err) res.send(err);
        res.text('success');

      });


      let msgOpts = {
        to: req.params.email,
        msg: 'confirm-email',
        data: {
          secretKey: crypto.randomBytes(20).toString()
        }
      };
      
      mailer.sendLetter(msgOpts);
      
      res.text('success');
    }
  });
}


function confirmEmail(req, res){
  Message.find({}, (err, messages) => {

    if (err) res.send(err);
    res.json(messages);

  });
}


function sendConfirmationLetterTo(email){

}






module.exports = {

  // register
  processEmail: processEmail,

  // register/:confirmString
  confirmEmail: confirmEmail

};


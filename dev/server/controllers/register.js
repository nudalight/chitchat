'use strict';


let User = require('../database/models/user');
let mailer = require('../mailer');



function processEmail(req, res){
  User.find({ email: req.params.email }, (err, users) => {

    if (err) res.send(err);

    if (users){
      // 1.1. если есть, то вернуть ошибку
      res.json({
        'error': 'User with this email already exists'
      });

    } else {

      // SEND TO EMAIL

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


'use strict';

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
});

let mail = {
  from: 'nuda4sure@gmail.com',
  to: '',
  subject: 'mySubject',
  html: '<p>Hello, <b>World</b></p>'
};


transport.sendMail(mail, (err, response) => {

  if (err) throw err;

  console.log('TRANSPORTER RESPONSE:', response);

  transport.close();

});



module.exports = {
  sendLetter: (options) => {
    console.log(options);
  }
};

'use strict';

let Message = require('../database/models/message');


function getMessageList(req, res){
  Message.find({}, (err, messages) => {

    if (err) res.send(err);
    res.json(messages);

  });
}

function postMessage(req, res){
  Message.create({
    senderId: 1,
    recepientId: 2,
    messageText: 'MSG TEXT',
    pubTimestamp: 12312312312
  }, (err) => {

    if (err) res.send(err);
    res.json('Message created');

  });
}

function getMessage(req, res){
  Message.findById(req.params.messageId, (err, message) => {

    if (err) res.send(err);
    res.json(message);

  });
}

function updateMessage(req, res){
  Message.findById(req.params.messageId, (err, message) => {

    if (err) res.send(err);

    message.messageText = 'NEW TEXT';
    message.save(err => {

      if (err) res.send(err);

      res.json({ myNotification: 'Message record id updated'});

    });

  });
}

function deleteMessage(req, res){

  Message.remove({
    _id: req.params.messageId
  }, (err, message) => {

    if (err) res.send(err);

    res.json({ myNotification: 'Successfully deleted' });

  });

}


module.exports = {

  // messages
  getMessageList: getMessageList,
  postMessage: postMessage,

  // messages/:messageId
  getMessage: getMessage,
  updateMessage: updateMessage,
  deleteMessage: deleteMessage

};


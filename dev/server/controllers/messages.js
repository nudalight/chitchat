router
  .route('/messages')
  .get((req, res) => {

    Message.find({}, (err, messages) => {

      if (err) res.send(err);
      res.json(messages);

    });

  })

  .post((req, res) => {

    Message.create({
      senderId: 1,
      recepientId: 2,
      messageText: 'MSG TEXT',
      pubTimestamp: 12312312312
    }, (err) => {

      if (err) res.send(err);
      res.json('Message created');

    });

  })
;



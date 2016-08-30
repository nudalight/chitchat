router
  .route('/messages/:messageId')
  .get((req, res) => {

    Message.findById(req.params.messageId, (err, message) => {

      if (err) res.send(err);
      res.json(message);

    });

  })
  .put((req, res) => {

    Message.findById(req.params.messageId, (err, message) => {

      if (err) res.send(err);

      message.messageText = 'NEW TEXT';
      message.save(err => {

        if (err) res.send(err);

        res.json({ myNotification: 'Message record id updated'});

      });

    });

  })
  .delete((req, res) => {

    Message.remove({
      _id: req.params.messageId
    }, (err, message) => {

      if (err) res.send(err);

      res.json({ myNotification: 'Successfully deleted' });

    });

  })

;
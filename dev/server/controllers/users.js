router.route('/users')
  .post((req, res) => {

    User.create({
      firstName: 'Peter'
    }, err => {

      if (err) res.send(err);
      res.json('User created');

    });

  })

  .get((req, res) => {

    User.find({}, (err, users) => {
      if (err) res.send(err);
      res.json(users);
    });

  })
;
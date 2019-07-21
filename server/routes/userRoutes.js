const express = require('express');
const bcrypt = require('bcrypt');

const User = require('./../dbmodels/user');

const router = express.Router();

router.post('/login', (req, res) => {
  const userInfo= req.body;
  User
    .findAll({
      where: {
        email: userInfo.email
      }
  })
    .then(result => {
      if(result.length > 0){
        bcrypt.compare(userInfo.password, result[0].dataValues.password, (error, hashed) => {
          if(hashed) {
            res.status(200).send(result[0]);
          } else {
            res.status(400).send({error: 'Wrong Credentials. Try again'});
          }
        })
      } else {
        res.status(400).send({error: 'Wrong Credentials. Try again'});
      }
    })
    .catch(err => console.log(err));
});

router.post('/register', (req, res) => {
  const userInfo = req.body;
  bcrypt.hash(userInfo.password, 10)
    .then(hashed => {
      User
        .create({
          email: userInfo.email,
          password: hashed,
          role: userInfo.email === 'admin@admin.com' ? 'ADMIN' : 'USER'
        })
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err.parent.code));
    });
})

module.exports = router;

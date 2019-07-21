const express = require('express');

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
        res.status(200).send(result[0].dataValues)
      } else {
        res.status(400).send({error: 'Wrong Credentials. Try again'});
      }
    })
    .catch(err => console.log(err));
});

router.post('/register', (req, res) => {
  const userInfo = req.body;
  User
    .create({
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.email === 'admin@admin.com' ? 'ADMIN' : 'USER'
    })
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err.parent.code));
})

module.exports = router;

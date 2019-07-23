const express = require('express');
const bcrypt = require('bcrypt');

const User = require('./../dbmodels/user');

const router = express.Router();

router.post('/login', (req, res) => {
  const userInfo= req.body;
  User
    .findOne({
      where: {
        email: userInfo.email
      }
  })
    .then(result => {
      if(result){
        bcrypt.compare(userInfo.password, result.dataValues.password, (error, hashed) => {
          if(hashed) {
            res.status(200).send(result);
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
});

router.put('/update', (req, res) => {
  const userInfo = req.body;
  User.findOne({
    where: {
      email: userInfo.email
    }
  }).then(result => {
    bcrypt.hash(userInfo.password, 10)
      .then(hashed => {
        User.update({
          email: userInfo.email,
          password: hashed,
          role: userInfo.role
        }, {
          where: {
            email: result.email
          }
        })
          .then(result => res.status(200).send(result))
          .catch(err => {
            res.status(400).send(err)
          });
      })
  })
});

router.put('/update-role', (req, res) => {
  const userInfo = req.body;
  User.update({
    role: userInfo.role
  }, {
    where: {
      email: userInfo.email
    }
  }).then(() => res.status(200).send('Role updated'))
    .catch(err => console.log(err))
});

router.delete('/delete/:email', (req,res) => {
  const userEmail = req.params.email;
  User.destroy({
    where: {
      email: userEmail
    }
  }).then(result => {
    res.status(200).send('User deleted')
  }).catch(err => res.status(400).send(err))
});

router.get('/all-users', (req,res) => {
  User.findAll()
    .then(result => res.send(result))
    .catch(err => console.log(err))
});


module.exports = router;

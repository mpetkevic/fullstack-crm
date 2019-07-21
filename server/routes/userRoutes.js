const express = require('express');

const User = require('./../dbmodels/user');

const router = express.Router();

router.post('/login', (req, res) => {
  const user = req.body;
  if (user.email === 'admin@demo.com') {
    user.role = 'ADMIN';
  }
  res.json(user);
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

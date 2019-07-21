const express = require ('express');

const router = express.Router();

router.post('/login', (req,res) => {
  const user = req.body;
  if(user.email === 'admin@demo.com') {
    user.role = 'ADMIN';
  }
  res.json(user);
});

router.post('/register', (req,res) => {
  const user = req.body;
  res.json(user)
})

module.exports = router;

const express = require ('express');

const router = express.Router();

router.post('/login', (req,res) => {
  const user = req.body
  res.send(user);
})

module.exports = router;

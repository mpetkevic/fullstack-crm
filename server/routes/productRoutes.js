const express = require('express');

const Product = require('./../dbmodels/product');

const router = express.Router();

router.post('/add', (req,res) => {
  const product = req.body;
  Product.create({
    name: product.name,
    description: product.description,
    price: product.price,
    picture: product.picture
  }).then(result => res.status(200).send('Product Added'))
    .catch(err => console.log(err));
});

router.get('/all', (req,res) => {
  Product.findAll()
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err))
});
router.get('/single', (req,res) => {
  const product = req.body;
  Product.findOne({
    where: {
      id: product.id
    }
  })
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err))
});

router.put('/update', (req, res) => {
  const product = req.body;
  Product.update({
    name: product.name,
    description: product.description,
    price: product.price,
    picture: product.picture
  }, {
    where: {
      id: product.id
    }
  }).then(result => res.status(200).send('Product Updated'))
    .catch(err => console.log(err));
});

router.delete('/delete/:id', (req, res) => {
  const product = req.params;
  Product.destroy({
    where: {
      id: product.id
    }
  }).then(result => res.status(200).send('Product Deleted'))
    .catch(err => console.log(err));
})

module.exports = router;

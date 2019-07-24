const express = require('express');
const environment = require('custom-env');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

environment.env();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.get('/', (req,res) => {
  res.send('App is working');
});


database.sync()
    .then(result => console.log('DB working!!!'))
    .catch(err => console.log(err));


app.listen(port, () => console.log(`Server is working on port: ${port}`))

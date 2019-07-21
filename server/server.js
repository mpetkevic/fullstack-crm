const express = require('express');
const environment = require('custom-env');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

environment.env('local');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', userRoutes);

app.get('/', (req,res) => {
  res.send('App is working');
});

app.listen(port, () => console.log(`Server is working on port: ${port}`))

const morgan = require('morgan');
require('dotenv').config();
const Joi = require('joi');
const log = require('./middleware');
const products = require('./routes/products');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(log);
app.use('/api/products',products);
app.use('/',home)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}...`))

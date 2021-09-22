const mongoose = require('mongoose');
require('dotenv').config();
const Joi = require('joi');
const products = require('./routes/products');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/shopping')
   .then(() => console.log('Coonnected to shopping mongoDB...'))
   .catch( err => console.log('Connection was not possible with mongoDB'))

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));
app.use('/api/products',products);


const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening to port ${port}...`))

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');

const Product = mongoose.model('Product',  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// router.get('/:id', (req, res) => {
//     const product = products.find((product) => product.id === parseInt(req.params.id));
//     if (!product) res.status(404).send('The product with given ID is not found');

//     res.send(product);
// });

router.post('/', async (req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    }
    let product = new Product({ name: req.body.name });
    product = await product.save();
    res.send(product);
});

router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new:true })

    if (!product) res.status(404).send('The product with given ID is not found');

    const result = validateProduct(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    }

    product.name = req.body.name;
    res.send(product);
});

router.delete('/:id', (req, res) => {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    if (!product) res.status(404).send('The product with given ID is not found');

    const index = products.indexOf(product);
    products.splice(index, 1);

    res.send(product);
})

function validateProduct(product) {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(15)
            .required()
            .trim()
    });
    return schema.validate(product);
}

module.exports = router;
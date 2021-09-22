const express = require('express');
const router = express.Router();
const Joi = require('joi');

const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 3, name: 'product3' },
    { id: 4, name: 'product4' }
];

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    if (!product) res.status(404).send('The product with given ID is not found');

    res.send(product);
});

router.post('/', (req, res) => {

    const result = validateProduct(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    }

    const product = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(product);
    res.send(product);
});

router.put('/:id', (req, res) => {
    const product = products.find((product) => product.id === parseInt(req.params.id));
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
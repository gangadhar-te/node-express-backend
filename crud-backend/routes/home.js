const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'MY App', 
                          message: 'Hello People Good Morning....', 
                          message2: 'Welcome to our application' })
});

module.exports = router;
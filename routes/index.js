'use strict';

const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    res.json('Welcome');
})

module.exports = router;
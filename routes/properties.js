'use strict';
const express = require('express');
const router = express.Router();
const PropertiesModel = require('../models/PropertiesModel');

router.get('/all/:user_id', async (req, res) => {
    user_id = req.params.user_id;
    const response = await PropertiesModel.getAllProperties(user_id);
    if (response !== undefined) {
        res.json(response).status(200);
    } else {
        res.status(404);
    }
})

router.get('/category', async (req, res) => {
    const {category} = req.body;
    const response = await PropertiesModel.getAllByCategory(category);
    res.json(response).status(200);
})

router.get('/zip', async (req, res) => {
    const {zip_code} = req.body;
    const response = await PropertiesModel.getAllByZip(zip_code);
    res.json(response).status(200);
})

router.get('/address', async (req, res) => {
    const {address} = req.body;
    const response = await PropertiesModel.getByAddress(address);
    res.json(response).status(200);
})



module.exports = router;
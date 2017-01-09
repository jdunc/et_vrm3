'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
router.get('/welcome', (req, res, next) => {
            res.render('FrontEnd/welcome');
});
router.get('/adultorchild', (req, res, next) => {
            res.render('FrontEnd/adultorchild');
});
module.exports = router;

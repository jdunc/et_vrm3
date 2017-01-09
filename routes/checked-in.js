'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
router.get('/checked-in', (req, res, next) => {
            res.render('pages/payment1');
});
module.exports = router;

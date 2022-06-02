const express = require('express');
const fruit=require('../util/helper')
const router = express.Router();
const dhoni=require('../logger/logger')
const forMatter = require('../validator/formatter')
router.get('/test-me1', function (req, res) {
dhoni.welcome()
fruit.printDate()
    fruit.printMonth()
    fruit.getBatchInfo()
    forMatter.trim()
    forMatter.lower()
    forMatter.upper()

    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My second ever api!')
});
router.get('/test-me3', function (req, res) {
    res.send('My third ever api!')
});
module.exports = router;
// adding this comment for no reason
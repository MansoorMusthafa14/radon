const express = require('express');

const router = express.Router();
const dhoni=require('./logger')
router.get('/test-me1', function (req, res) {
    console.log("my first project"+dhoni.endpoint)
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
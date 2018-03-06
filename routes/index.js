// import { dirname } from 'path';

const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function(req,res){
    let tweets = tweetBank.list();
    // console.log({tweets:tweets})
    res.render('index', {tweets: tweets});
    next();
})

router.get('/stylesheets/style.css', function(req,res){
    res.sendFile();
    // next();
})

module.exports = router;
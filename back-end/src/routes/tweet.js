
const tweetController = require('../controllers/tweet.controller');
const express = require('express');
const router = express.Router();

//create new tweet
router.post('/tweet', tweetController.create);
router.get('/tweets/like/:id', tweetController.incrementLike);
router.get('/tweets/retweet/:id', tweetController.incrementRetweet);

module.exports = router;
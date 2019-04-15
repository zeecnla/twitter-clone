
const tweetController = require('../controllers/tweet.controller');
const express = require('express');
const router = express.Router();

//create new tweet
router.post('/', tweetController.create);
router.get('/', tweetController.getAllTweets);
router.get('/like/:id', tweetController.incrementLike);
router.get('/retweet/:id', tweetController.incrementRetweet);

module.exports = router;
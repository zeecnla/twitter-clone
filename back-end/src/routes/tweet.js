
import { create, incrementLike, incrementRetweet, allTweets } from '../controllers/tweet.controller';
import { Router } from 'express';
const router = Router();

//create new tweet
router.post('/', create);
router.get('/', allTweets)
router.get('/like/:id', incrementLike);
router.get('/retweet/:id', incrementRetweet);

module.exports = router;
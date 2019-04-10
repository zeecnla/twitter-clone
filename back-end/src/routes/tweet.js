
const TweetModel = require('../models/tweets.model');
const express = require('express');
const router = express.Router();

//create new tweet
router.post('/tweet', (req,res)=>{
    if(!req.body){
        return res.status(400).send('Request Body is missing');
    }
    const model = new TweetModel(req.body);
    model.save()
    .then(doc => {
        if(!doc || doc.length===0){
            return res.status(500).send(doc);
        }
        return res.status(200).send(doc);
    })
    .catch(error => {
        res.status(500).json(error);
    }); 
});
router.get('/tweets', (req,res) => {
    TweetModel.find({}, (error, tweets)=>{
        var tweetMap = {};

        tweets.forEach(function(tweet) {
            tweetMap[tweet._id] = tweet;
        });

        res.status(200).send(tweetMap); 
    });
});
router.get('/tweets/:id', (req,res)=> {
    if(!req.params.id){
        return res.status(400).send('Param Id is missing');
    }

    const id = req.params.id;
    TweetModel.findById(id, (error, tweet)=>{
        if(!tweet){
            return res.status(500).send(tweet);
        }
        return res.status(200).send(tweet);
    })
    .catch(error => {
        res.status(500).json(error);
    }); 

});

router.get('/tweets/like/:id', (req,res)=> {
    if(!req.params.id){
        return res.status(400).send('Param Id is missing');
    }
 
    const id = req.params.id;
    TweetModel.findByIdAndUpdate(id, {
        $inc: { likes: 1 } 
    }, { new:true }, (error, tweet)=>{
        if(!tweet){
            return res.status(500).send(tweet);
        }
        return res.status(200).send(tweet);
    });
});

router.get('/tweets/retweet/:id', (req,res)=> {
    if(!req.params.id){
        return res.status(400).send('Param Id is missing');
    }
 
    const id = req.params.id;
    TweetModel.findByIdAndUpdate(id, {
        $inc: { retweets: 1 } 
    }, { new:true }, (error, tweet)=>{
        if(!tweet){
            return res.status(500).send(tweet);
        }
        return res.status(200).send(tweet);
    });
});

module.exports = router;
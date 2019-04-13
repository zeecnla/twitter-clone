const tweetModel = require('../models/tweets.model');

module.exports = {
    create: function (req, res, next) {
        tweetModel.create({
            id: req.body.id,
            context: req.body.context,
            likes: 0,
            retweets: 0
        }, function (error, result) {
            if (error){
                next(error);
            }else{
                res.json({
                    status: "success",
                    message: "tweet added",
                    data: null
                });
            }
        });
    },
    incrementLike: function (req, res, next) {
        const id = req.params.id;
        tweetModel.findByIdAndUpdate(id, {
            $inc: {
                likes: 1
            }
        }, function (error, tweet) {
            if (error){
                next(error);
            }else{
                res.json({
                    status: "success",
                    message: "liked increased",
                    data: null
                });
            }
        });
    },
    incrementRetweet: function (req, res, next) {
        const id = req.params.id;
        tweetModel.findByIdAndUpdate(id, {
            $inc: {
                retweets: 1
            }
        }, function (error, tweet) {
            if (error){
                next(error);
            }else{
                res.json({
                    status: "success",
                    message: "liked increased",
                    data: null
                });
            }
        });
    }
}
const mongoose = require('mongoose');
let TweetSchema = new mongoose.Schema({
    context: String,
    likes: Number,
    retweets: Number
});

module.exports = mongoose.model('Tweet' , TweetSchema);
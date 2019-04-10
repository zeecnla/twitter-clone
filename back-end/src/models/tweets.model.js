const mongoose = require('mongoose');
let TweetSchema = new mongoose.Schema({
    context: String,
    likes: { type: Number, default: 0 }, 
    retweets: { type: Number, defualt: 0 }
});

module.exports = mongoose.model('Tweet' , TweetSchema);
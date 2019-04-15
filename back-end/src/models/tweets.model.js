const mongoose = require('mongoose');
let TweetSchema = new mongoose.Schema({
    userId: {type: String, required:true},
    context: String,
    likes: { type: Number, default: 0 }, 
    retweets: { type: Number, defualt: 0 }
});

module.exports = mongoose.model('Tweet' , TweetSchema);
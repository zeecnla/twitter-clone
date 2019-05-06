
import db from '../../lib/lowdb';
const shortid = require('shortid')
export function create (req, res, next) {
    console.log('creating tweet...');
    console.log(req.body.userId);
    db.get('tweets')
    .push({
        id: shortid.generate(),
        date: Date.now(),
        userId: req.body.email,
        context: req.body.context,
        likes: 0,
        retweets: 0
    })
    .write();
    res.json({
        status: "success",
        message: "tweet added",
        data: null
    })
    
}
export function incrementLike (req, res, next) {
    const id = req.params.id;

    console.log("incrementing like");
    db.get('tweets')
    .find({ id: id })
    .update('likes', n => n+1)
    .write();
    
    res.json({
        status: "success",
        message: "liked increased",
        data: null
    });
}
export function incrementRetweet(req, res, next) {
    const id = req.params.id;

    console.log("incrementing retweet");
    db.get('tweets')
    .find({ id: id })
    .update('retweets', n => n+1)
    .write();
    
    res.json({
        status: "success",
        message: "retweet increased",
        data: null
    });
}

export function allTweets(req, res, next) {
    

    const tweets = db.get('tweets').value()
    
    res.json({
        status: "success",
        message: "all tweets",
        data: tweets
    });
}

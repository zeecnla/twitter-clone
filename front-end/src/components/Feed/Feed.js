import React, { Component } from 'react';
import './Feed.css';
import Tweet from '../Tweet/Tweet'
import { withRouter } from 'react-router-dom'




const Feed = ({tweets, handleLike, handleRetweet }) => {
    return (
        <div className="feed">
            {tweets.map((tweet, index)=> <Tweet
                handleLike={handleLike}
                handleRetweet={handleRetweet}
                id={tweet.id}
                date={tweet.date}
                likes={tweet.likes}
                retweets={tweet.retweets}
                user={tweet.userId}
                context={tweet.context}
                key={index} />)}
        </div>
    );
}

export default withRouter(Feed);


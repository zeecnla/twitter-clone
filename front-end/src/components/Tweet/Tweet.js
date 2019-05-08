import React from 'react';
import './Tweet.css';



const Tweet =({context, date, likes, retweets, user})=> (
    <div className="tweet">
        <div className="tweet__body">
            <p> {user}</p>
            <p className="tweet_message">{context}</p>
            
            <ul>
                <li><i class="far fa-heart"></i> <span>{likes}</span></li>
                <li><i class="fas fa-retweet"></i> <span>{retweets}</span></li>
            </ul> 
        </div>
    </div>
);

export default Tweet



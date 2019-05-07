import React from 'react';
import './Tweet.css';



const Tweet =({context, date, likes, retweets, user})=> (
    <div className="tweet">
        <div className="tweet__body">
            <p>{user}</p>
            <p className="tweet_message">{context}</p>
            
            <ul>
                <li>likes <span>{likes}</span></li>
                <li>retweets <span>{retweets}</span></li>
            </ul> 
        </div>
    </div>
);

export default Tweet



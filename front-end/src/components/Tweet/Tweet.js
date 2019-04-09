import React from 'react';
import './Tweet.css';



const Tweet =({image, tweet})=> (
    <div className="tweet">
        <img src={image} alt="avatar"/>
        <div className="tweet__body">
            <p className="tweet_message">{tweet}</p>
            <span className="tweet__actions">Action components</span> 
        </div>
    </div>
);

export default Tweet



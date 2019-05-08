import React, { Component } from 'react';
import './Feed.css';
import Tweet from '../Tweet/Tweet'
import { withRouter } from 'react-router-dom'




class Feed extends Component {

    constructor(props){
        super(props);

    }
    render() {

        return (
            <div className="feed">
                {this.props.tweets.map((tweet, index)=> <Tweet id={tweet.id} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets} user={tweet.userId} context={tweet.context} key={index} />)}
            </div>
        );
    }
}

export default withRouter(Feed);


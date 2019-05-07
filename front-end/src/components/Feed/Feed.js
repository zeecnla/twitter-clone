import React, { Component } from 'react';
import './Feed.css';
import Tweet from '../Tweet/Tweet'




class Feed extends Component {

    constructor(){
        super();

        this.state = {
            tweets:[]
        }
    }

    componentDidMount(){

        const token = localStorage.getItem('token');
        fetch(`http://localhost:2093/tweets/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'x-access-token': token
            }
        })
        .then(res => res.json())
        .then(response =>  this.setState({tweets: response.data}))
        .catch(error => console.error('Error:', error));
            
    }
    render() {

        return (
            <div className="feed">
                {this.state.tweets.map((tweet, index)=> <Tweet id={tweet.id} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets} user={tweet.userId} context={tweet.context} key={index} />)}
            </div>
        );
    }
}

export default Feed;


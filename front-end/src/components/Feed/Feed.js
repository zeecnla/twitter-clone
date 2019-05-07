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
        fetch(`http://localhost:2093/tweets/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(error => console.error('Error:', error));
            
    }
    render() {

        const data = [
            {
                image:'',
                tweet:"Hello friends!!"
            },
            {
                image:'',
                tweet:"i love cats!"
            },
            {
                image:'',
                tweet:"we are going to dinseyland!!"
            }
        ]
        return (
            <div className="feed">
                {data.map((tweetObject, index)=> <Tweet image={tweetObject.image} tweet={tweetObject.tweet} key={index} />)}
            </div>
        );
    }
}

export default Feed;


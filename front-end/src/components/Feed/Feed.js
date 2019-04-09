import React, { Component } from 'react';
import './Feed.css';
import Tweet from '../Tweet/Tweet'




class Feed extends Component {

    componentDidMount(){
        //fetch the suers following here
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


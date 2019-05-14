import React, {Component} from 'react';
import './Tweet.css';



class Tweet extends Component {

    constructor(props){
        super(props);
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleRetweetClick = this.handleRetweetClick.bind(this);
    }
    handleLikeClick(event){
        this.props.handleLike(event,this.props.id);
    }
    handleRetweetClick(event){
        this.props.handleRetweet(event,this.props.id);
    }

    render() {
        return(
            <div className="tweet">
                <div className="tweet__body">
                    <p> {this.props.user}</p>
                    <p className="tweet_message">{this.props.context}</p>

                    <ul>
                        <li><i className="far fa-heart" onClick={this.handleLikeClick}></i> <span>{this.props.likes}</span></li>
                        <li><i className="fas fa-retweet" onClick={this.handleRetweetClick}></i> <span>{this.props.retweets}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tweet



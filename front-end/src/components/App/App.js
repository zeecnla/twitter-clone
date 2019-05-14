import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import TweetForm from '../TweetForm/TweetForm'
import Feed from '../Feed/Feed'

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      context: '',
      tweets: []
    }
    this.handleContextChange = this.handleContextChange.bind(this);
    this.handleSubmitTweet = this.handleSubmitTweet.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
  }
  getAllTweets() {
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
      .then(response => {
        console.log(response.data);
        this.setState({ tweets: response.data });
      })
      .catch(error => console.error('Error:', error));
  }
  handleContextChange(event) {
    this.setState({ context: event.target.value });
  }
  handleSubmitTweet(event) {
    console.log(event);
    const token = localStorage.getItem('token');
    const data = this.state;
    fetch(`http://localhost:2093/tweets/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': token
      },
      body: JSON.stringify(data)
    })
      .then(res => { console.log(res); res.json() })
      .then(response => {
        console.log(response);
        this.getAllTweets();
      })
      .catch(error => console.error('Error:', error));
    event.preventDefault();
  }
  handleLike(event, id) {
    let error = false;
    const token = localStorage.getItem('token');
    const data = this.state;
    fetch(`http://localhost:2093/tweets/like/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': token
      }
    })
      .then(res => res.json())
      .then(response => {
        if (!response.success) error = false;
      })
      .catch(error => {
        console.error('Error:', error)
        error = true;
      });
    if (!error) {
      this.getAllTweets();
    }
    event.preventDefault();


  }
  handleRetweet(event, id) {
    let error = false;
    const token = localStorage.getItem('token');
    const data = this.state;
    fetch(`http://localhost:2093/tweets/retweet/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': token
      }
    })
      .then(res => res.json())
      .then(response => {
        if (!response.success) error = false;
      })
      .catch(error => {
        console.error('Error:', error)
        error = true;
      });
    if (!error) {
      this.getAllTweets();
    }
    event.preventDefault();
  }
  componentDidMount() {
    this.getAllTweets();
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <TweetForm onContextChange={this.handleContextChange} onSubmitTweet={this.handleSubmitTweet} />
          <Feed handleRetweet={this.handleRetweet} handleLike={this.handleLike} tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}

export default App;

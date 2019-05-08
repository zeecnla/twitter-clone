import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import TweetForm from '../TweetForm/TweetForm'
import Feed from '../Feed/Feed'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      token: '',
      context: '',
      tweets: []
    }
    this.handleContextChange = this.handleContextChange.bind(this);
    this.handleSubmitTweet = this.handleSubmitTweet.bind(this);
  } 
  handleContextChange(event){
    this.setState({context: event.target.value});
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
      .then(res => res.json())
      .then(response => {
          console.log(response);
          this.getAllTweets();
      })
      .catch(error => console.error('Error:', error));
      event.preventDefault();
  }
  componentDidMount(){
    this.getAllTweets();
  }
  getAllTweets(){
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
        <div className="App">
          <div className="container">
            <TweetForm onContextChange={this.handleContextChange}  onSubmitTweet={this.handleSubmitTweet} />
            <Feed tweets={this.state.tweets}/> 
          </div>
        </div>
    );
  }
}

export default App;

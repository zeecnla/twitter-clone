import React, { Component } from 'react';
import './App.css';
import TweetForm from '../TweetForm/TweetForm'
import Feed from '../Feed/Feed'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      token: ''
    }
  }
  componentDidMount(){

  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <TweetForm />
            <Feed/>
          </div>
        </div>
    );
  }
}

export default App;

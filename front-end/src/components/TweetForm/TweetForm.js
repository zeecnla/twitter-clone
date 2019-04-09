import React, { Component } from 'react';
import axios from 'axios'
import './TweetForm.css';

import avatar from '../../assets/avatar.jpg'

class TweetForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: ""
        };
        this.submitTweet = this.submitTweet.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    submitTweet = event => {
        event.preventDefault();
        const newTweet = {
          tweet: this.state.value,
          user: 'zeec'
        }
        axios.post(`localhost:2093/addPost`, {newTweet} )
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })

        this.setState({value: ""});
    }
  render() {
    return (
            <div className="tweet">
              <img style={{
                width:`100px`,
                height:`100px`
              }}src={avatar} alt="avatar"/>
              <form onSubmit={this.submitTweet}>
                  <label>
                      Tweet:
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  </label>
                  <input type="submit" value="Submit" />
              </form>
            </div>
    );
  }
}

export default TweetForm;

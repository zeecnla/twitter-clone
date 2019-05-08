import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './TweetForm.css';


class TweetForm extends Component {
    constructor(props) {
        super(props);
        this.submitTweet = this.submitTweet.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.props.onContextChange(event);
    }
    submitTweet = event => {
      this.props.onSubmitTweet(event);
      
    }
  render() {
    return (
            <div className="tweet__form">
              <form onSubmit={this.submitTweet}>
                  <textarea placeholder="Message the world!" onChange={this.handleChange}></textarea>
                  <input type="submit" value="Submit" />
              </form>
            </div>
    );
  }
}

export default withRouter(TweetForm);

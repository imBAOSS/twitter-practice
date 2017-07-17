import React from 'react';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet_body: "",
      tweet_owner: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
  }

  handleChange(key) {

  }

  render() {
    return(
      <div>
        <form>
          <h5>Body</h5>
          <input
            onChange={ this.handleChange("body") }
            value={ this.state.tweet_body }>
          </input>
          <h5>Username</h5>
          <input onChange={ this.handleChange("owner") }value={ this.state.tweet_owner }>
          </input>
          <button onClick={ this.handleSubmit }>Submit</button>
        </form>
      </div>
    )
  }
}

export default TweetForm;

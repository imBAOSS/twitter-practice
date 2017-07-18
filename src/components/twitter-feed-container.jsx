import React from 'react';
import TweetContainer from './tweet_container';
import TweetForm from './tweet_form';

let localState = {
  tweet_1: {
    tweet_id: 1,
    tweet_owner: "tweeter",
    tweet_date: "12-12-12",
    tweet_body: "Check out this new tweet!"
  },

  tweet_2: {
    tweet_id: 2,
    tweet_owner: "twooter",
    tweet_date: "12-13-12",
    tweet_body: "Life is great!"
  },

  tweet_3: {
    tweet_id: 3,
    tweet_owner: "twuuter",
    tweet_date: "12-14-12",
    tweet_body: "Just gotta tweet!"
  }
};

class TwitterFeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: localState
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(val) {
    this.setState({
      newTweet:  {
        tweet_body: val.tweet_body,
        tweet_owner: val.tweet_owner
      }
    })
  }

  render() {
    let tweets = Object.keys(this.state).map((tweet) => {
      let tweetInfo = this.state[tweet]
      return <TweetContainer key={tweetInfo.tweet_id} tweet={ tweetInfo }/>
    });

    return(
      <div>
        <div>Twitter Feed!</div>
        <ul className="tweets-container">
          { tweets }
        </ul>
        <TweetForm handleSubmit={ this.handleSubmit }/>
      </div>
    )
  }
}

export default TwitterFeedContainer;

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
    this.state = localState;
  }

  render() {
    let tweets = Object.keys(this.state).map((tweet) => {
      let tweetInfo = this.state[tweet]
      return <TweetContainer key={tweetInfo.tweet_id} tweet={ tweetInfo } />
    });

    return(
      <div>
        <div>Twitter Feed!</div>
        <ul className="tweets-container">
          { tweets }
        </ul>
        <TweetForm />
      </div>
    )
  }
}

export default TwitterFeedContainer;

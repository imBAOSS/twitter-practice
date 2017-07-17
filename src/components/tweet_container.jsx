import React from 'react';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.tweet = this.props.tweet
  }

  render() {
    return(
      <div>
        { this.tweet.tweet_owner }<br/>
        { this.tweet.tweet_date }<br/>
        { this.tweet.tweet_body }<br/>
      </div>
    )
  }
}

export default TweetContainer;

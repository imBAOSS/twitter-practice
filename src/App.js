import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwitterFeedContainer from './components/twitter-feed-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TwitterFeedContainer />
      </div>
    );
  }
}

export default App;

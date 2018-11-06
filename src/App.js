import React, { Component } from 'react';
import './App.css';
import FetchBar from './Fetcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchBar/>
      </div>
    );
  }
}

export default App;

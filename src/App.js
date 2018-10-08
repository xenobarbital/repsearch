import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchApi from './helpers/FetchApi';

class App extends Component {
  // testing
  componentWillMount() {
    FetchApi.getData('RNRF/react-native-router-flux');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

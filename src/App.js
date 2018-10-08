import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // testing
  componentWillMount() {
    this.getData('RNRF/react-native-router-flux');
  }

  async getData(repName) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repName}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const repData = {
          full_name: jsonResponse.full_name,
          url: jsonResponse.url,
          forks: jsonResponse.forks,
          forks_count: jsonResponse.forks_count
        }
        console.log(repData);
        // redux connection
      } else {
        throw new Error('Rep request failed!');
      }
    } catch (e) {
      console.log('Rep EGGOG!', e);
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${repName}/forks`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const forkData = jsonResponse.map(elem => ({
          full_name: elem.full_name,
          html_url: elem.html_url,
          stargazers_count: elem.stargazers_count,
          owner_login: elem.owner.login,
          owner_url: elem.owner.url,
          owner_avatar: elem.owner.avatar_url
        }));
        console.log(forkData);
        // redux connection
      } else {
        throw new Error('Forks request failed!');
      }
    } catch (e) {
      console.log('Forks EGGOG!', e);
    }
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

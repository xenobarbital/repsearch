import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import SearchResults from './routes/SearchResults';
import logo from './logo.svg';
import './App.css';
import FetchApi from './helpers/FetchApi';

class App extends Component {
  // testing
  componentWillMount() {
    FetchApi.getData('RNRF/react-native-router-flux');
  }

  render = () => (
    <div>
      <div>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/searchResults'}>Search results</Link>
          </li>
        </ul>
      </div>

      <Route exact path={'/'} component={Home} />
      <Route path={'/searchResults'} component={SearchResults} />
    </div>
  )

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;

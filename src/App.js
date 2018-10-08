import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import SearchResults from './routes/SearchResults';
import FetchApi from './helpers/FetchApi';

class App extends Component {
  // testing
  componentWillMount() {
    FetchApi.getData('RNRF/react-native-router-flux');
  }

  render = () => (
    <div class="container">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="nav">
            <li class="nav-item">
              <Link to={'/'} class="nav-link">Home</Link>
            </li>
            <li>
              <Link to={'/searchResults'} class="nav-link">Search results</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route exact path={'/'} component={Home} />
      <Route path={'/searchResults'} component={SearchResults} />
    </div>
  )
}

export default App;

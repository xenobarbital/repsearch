import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import SearchResults from './routes/SearchResults';

class App extends Component {
  render = () => (
    <div className="container">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li>
              <Link to={'/searchResults'} className="nav-link">Search results</Link>
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

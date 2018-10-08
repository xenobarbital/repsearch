import React, {Component} from 'react';
import Search from '../components/Search';

export default class Home extends Component {
  render = () => (
    <div className="container">
      <div className="jumbotron">
        <Search />
      </div>
    </div>
  )
}

import React, {Component} from 'react';
import Search from '../components/Search';

export default class Home extends Component {
  render = () => (
    <div class="container">
      <div class="jumbotron">
        <Search />
      </div>
    </div>
  )
}

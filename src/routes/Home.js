import React, {Component} from 'react';
import Search from '../components/Search';
import Store from '../redux/Store';

export default class Home extends Component {
  componentDidMount = () => {
    console.log(Store.getState());
  }

  render = () => (
    <div className="container">
      <div className="jumbotron">
        <Search />
      </div>
    </div>
  )
}

import React, {Component} from 'react';
import FetchApi from '../helpers/FetchApi';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({value: e.target.value}, () => console.log(this.state.value));
  }

  handleClick = () => {
    FetchApi.getData(this.state.value);
  }

  render = () => (
    <div className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search for forks"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
      <button className="btn btn-primary mb-2" onClick={this.handleClick}>
        Search
      </button>
    </div>
  )
}

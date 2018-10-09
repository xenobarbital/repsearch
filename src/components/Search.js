import React, {Component} from 'react';
import FetchApi from '../helpers/FetchApi';
import {Redirect} from "react-router-dom";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      value: ''
    }
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleClick = () => {
    FetchApi.getData(this.state.value);
    if (this.props.homePage) {
      this.setState({redirect: true});
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/searchResults'} />
    }
    return (
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
}

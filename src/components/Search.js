import React, {Component} from 'react';

export default class Search extends Component {
  render = () => (
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <input type="text" className="form-control" placeholder="Search for forks" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Search</button>
    </form>
  )
}

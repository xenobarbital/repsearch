import React, {Component} from 'react';
import Search from '../components/Search';
import Tabulator from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';
import FetchApi from '../helpers/FetchApi';
import Store from '../redux/Store';

export default class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      // tableData: [{id: 1, fullName: 'ololo', owner: 'trololo', stars: '12', url: 'someUrl', favorite: false}]
      tableData: [],
      value: 1
    }
  }

  // divRef = React.createRef();
  tabulator = null

  renderListing(rawData) {
    if (rawData.length) {
      const tableData = rawData.map(elem => {
        return {
          id: elem.id,
          fullName: elem.full_name,
          owner: elem.owner_login,
          stars: elem.stargazers_count,
          url: `<a href="${elem.html_url}" target="_blank">Link to fork repository</a>`
        }
      });
      this.setState({tableData}, () => this.renderTable());
      console.log('Table data', tableData);
    }
  }

  listener() {
    const listing = Store.getState().listing;
    this.renderListing(listing);
  }

  componentDidMount() {
    // this.renderTable();
    Store.subscribe(() => this.listener());
  }

  // componentWilUnmount() {
  //   Store.subscribe(() => this.listener());
  // }


  goToNext() {
    const store = Store.getState();
    const fullName = store.repData.full_name;
    let currentPage = store.currentPage;
    const maxPage = store.repData.numOfPages;
    if (currentPage < maxPage) {
      currentPage++;
      FetchApi.getData(fullName, currentPage);
    }
  }

  goToPrev() {
    const store = Store.getState();
    const fullName = store.repData.full_name;
    let currentPage = store.currentPage;
    if (currentPage > 1) {
      currentPage--;
      FetchApi.getData(fullName, currentPage);
    }
  }

  renderTable() {
    this.tabulator = new Tabulator(this.el, {
      layout: 'fitColumns',
      columns: [
        {title: 'Full name', field: 'fullName'},
        {title: 'Owner', field: 'owner'},
        {title: 'Stars', field: 'stars', formatter: 'star'},
        {title: 'URL', field: 'url', formatter: 'html'},
        // {title: 'Favorite', field: 'favorite', align: 'center', formatter: 'tickCross', sorter: 'boolean'}
      ],
      data: this.state.tableData
    });
  }

  handleChange = (e) => {
    if (e.target.value > 0) {
      this.setState({value: e.target.value});
    }
  }

  handleClick = () => {
    const store = Store.getState();
    const fullName = store.repData.full_name;
    const page = this.state.value;
    FetchApi.getData(fullName, page);
  }

  render = () => (
    <div className="container">
      <div className="breadcrumb align-items-center"><Search /></div>
      {this.state.tableData.length ? (
        <div>
          <p>SEARCH RESULTS</p>
          <div>
            <p>Number of pages: {Store.getState().repData.numOfPages}</p>
          </div>
          <div className="btn-group btn-group-toggle breadcrumb">
            <button className="btn btn-outline-dark" onClick={() => this.goToPrev()}>Prev</button>
            <button className="btn btn-outline-dark" onClick={() => this.goToNext()}>Next</button>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="number"
                min={1}
                max={Store.getState().repData.numOfPages}
                className="form-control"
                placeholder="Input page number"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary mb-2" onClick={this.handleClick}>
              Go
            </button>
          </div>
        </div>
      ) : null}
      <div id="results" ref={el => (this.el = el)}>
      </div>
    </div>
  )
}

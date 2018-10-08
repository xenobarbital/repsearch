import React, {Component} from 'react';
import Search from '../components/Search';
import Tabulator from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

export default class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [{id: 1, fullName: 'ololo', owner: 'trololo', stars: '12', url: 'someUrl', favorite: false}]
    }
  }

  // divRef = React.createRef();
  tabulator = null

  componentDidMount() {
    this.renderTable();
  }

  renderTable() {
    this.tabulator = new Tabulator(this.el, {
      layout: 'fitColumns',
      columns: [
        {title: 'Full name', field: 'fullName'},
        {title: 'Owner', field: 'owner'},
        {title: 'Stars', field: 'stars', formatter: 'star'},
        {title: 'URL', field: 'url'},
        {title: 'Favorite', field: 'favorite', align: 'center', formatter: 'tickCross', sorter: 'boolean'}
      ],
      data: this.state.tableData
    });
  }

  render = () => (
    <div className="container">
      <div class="breadcrumb align-items-center"><Search /></div>
      <p>SEARCH RESULTS</p>
      <div id="results" ref={el => (this.el = el)}>

      </div>
    </div>
  )
}

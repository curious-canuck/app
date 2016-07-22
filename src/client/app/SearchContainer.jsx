import React              from 'react';
import Search             from './Search.jsx';
import Results            from './Results.jsx';
import fullPull           from '../helpers/ajaxAdapter.js';

export default class SearchContainer extends React.Component {

constructor() {
  super();
  this.state = {
    query: "",
    searched: false,
    results: []
  }
}

handleUpdateSearch(event) {
  this.setState({
    query: event.target.value
  })
}

handleSubmitSearch(event) {
  event.preventDefault();

  fullPull(this.state.query).then( data => {
    console.log(data)
    this.setState({
      results: data,
      query: '',
      searched: true
    })
  })
}

render() {
  if(this.state.searched) {
    return (
      <div className="jumbotron">
        <Results countryData={this.state.results} />
        <Search  onUpdateSearch={this.handleUpdateSearch.bind(this)}
                 onSubmitSearch={this.handleSubmitSearch.bind(this)}
                 query={this.state.query} />
      </div>
    )
  } else {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>Results</h1>
        <Search onUpdateSearch={this.handleUpdateSearch.bind(this)}
                onSubmitSearch={this.handleSubmitSearch.bind(this)}
                query={this.state.query} />
      </div>
    )
  }
}
}

import React from 'react';
import Search from './Search.jsx';
import Results from './Results.jsx';
import fullPull from '../helpers/ajaxAdapter.js'

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
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitSearch(event) {
    console.log('fired')
    event.preventDefault();

    fullPull(this.state.query).then( data => {
      console.log(data);
      this.setState({
        results: data,
        query: '',
        searched: true
      })
      console.log(this.state);
    })
  }

  handleSearchToggle(event) {
    this.setState({
      results: [],
      query: '',
      searched: false
    });
  }

  render() {

    if(this.state.searched) {
      return (
        <div className="jumbotron col-sm-12 text-center">
          <a onClick={this.handleSearchToggle.bind(this)}>
            <h1>Travel Advisory</h1>
          </a>
          <div className="col-sm-12">
          <Results
          countryData={this.state.results}
          />
          </div>
        </div>
      )
    } else {
      return (
        <div className="jumbotron col-sm-12 text-center">
          <a>
            <h1>Travel Advisory</h1>
          </a>
          <div className="col-sm-12">
            <Search
            onUpdateSearch={this.handleUpdateSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            query={this.state.query}/>
          </div>
        </div>
      )
    }
  }
}

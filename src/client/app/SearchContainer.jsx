import React              from 'react';
import Search             from './Search.jsx';
import Results            from './Results.jsx';
import AjaxAdapter        from '../helpers/AjaxAdapter.js'
// import util             from '../helpers/util.js'

const ajax = new AjaxAdapter(fetch);

export default class SearchContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      searched: false,
      results: [],
      countryData: []
    }
  }

  componentDidMount(){
    const self = this
    ajax.handleCountryList()
      .then(function(data) {
        self.setState({countryData: data})
      })
  }

  handleSubmitSearch(countryCode) {
    ajax.fullPull(countryCode).then( data => {
      console.log(data)
      this.setState({
        results: data,
        searched: true
      })
    })
  }

  render() {
    if(this.state.searched) {
      return (
        <div className="jumbotron">
          <Results countryData={this.state.results} />
          <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                  countryData={this.state.countryData} />
        </div>
      )
    } else {
      return (
        <div className="jumbotron col-sm-12 text-center">
          <h1>SEARCH</h1>
          <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                  countryData={this.state.countryData} />
        </div>
      )
    }
  }
}

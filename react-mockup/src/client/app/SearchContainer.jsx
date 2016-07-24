import React              from 'react';
import Search             from './Search.jsx';
import Results            from './Results.jsx';
import AjaxAdapter        from '../helpers/AjaxAdapter.js'
import CommentDisplay     from './CommentDisplay.jsx'
import Login              from './Login.jsx'

const ajax = new AjaxAdapter(fetch);

export default class SearchContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      searched: false,
      results: [],
      countryData: [],
      currentComments: {},
      currentCountry: '',
      isLoggedIn: false
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
      this.handleChange(countryCode)
      this.setState({
        results: data,
        searched: true
      })
    })
  }

  handleNewComment(NewComment, code){
    let self = this
    ajax.addComment(NewComment, code)
      .then(function(data){
        console.log("This is coming from handleNewComment", data)
        self.handleChange(code)
        self.setState({
          currentComments: data,
          currentCountry: code
        })
      })
  }

  handleChange(code){
    let self = this;
    ajax.getComments(code)
      .then(function(data){
        console.log("This is coming from handleChange",data)
        console.log(self)
        self.setState({
          currentComments: data,
          currentCountry: code
        })
      })
  }

  toggleLogin(){
    this.setState({
      isLoggedIn:true
    })
  }


  render() {
    if(this.state.searched) {
      return (
        <div className="jumbotron">
          <h1>RESULTS</h1>
          <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                  countryData={this.state.countryData} />
          <CommentDisplay handleChange={this.handleChange.bind(this)}
                  handleNewComment={this.handleNewComment.bind(this)}
                  currentComments={this.state.currentComments}
                  currentCountry={this.state.currentCountry} />
          <Results countryData={this.state.results} />
          <Login isLoggedIn={this.toggleLogin.bind(this)}
                  loggedInState={this.state.isLoggedIn} />
        </div>
      )
    } else {
      return (
        <div className="jumbotron col-sm-12 text-center">
          <h1>SEARCH</h1>
          <Search onSubmitSearch={this.handleSubmitSearch.bind(this)}
                  countryData={this.state.countryData} />
          <Login isLoggedIn={this.toggleLogin.bind(this)}
                  loggedInState={this.state.isLoggedIn} />
        </div>
      )
    }

  }
}

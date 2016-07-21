'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Header           from './Header.jsx'
import Search           from './Search.jsx'
import Comments         from './Comments.jsx'
import Country          from './Country.jsx'
import Login           from './Login.jsx'

// create a React Component called _App_
export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      CC: "",
      searched: true,
      UN: "",
      loggedin: false
    }

  }

  // checkLogin(){

  // }


  render(){
    if (this.state.searched) {
      return (
        <div>
          <div className="row">
            <header className="col-md-6">
              <Header />
            </header>
            <div  className="col-md-6">
              <Search />
            </div>
          </div>
          <div className="row">
            <Comments />
            <Country />
          </div>
          <footer>
            <Login />
          </footer>
        </div>
      )
    } else {
      return(
        <div>
          <div className="jumbotron">
            <Header />
            <Search />
          </div>
          <footer>
            <Login />
          </footer>
        </div>
      )
    }
  }



}

ReactDOM.render(<App/>, document.querySelector('#container'))

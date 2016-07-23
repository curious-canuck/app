'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Login            from './Login.jsx'
// import Comments         from './Comments.jsx'
import SearchContainer  from  './SearchContainer.jsx'

// create a React Component called _App_
export default class App extends React.Component {

  render(){
    return(
    <container>
    <SearchContainer />
    <Login />

    </container>
    )
  }



}

ReactDOM.render(<App/>, document.querySelector('#container'))

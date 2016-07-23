'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import CreateUser       from './CreateUser.jsx'
import Login            from './Login.jsx'

import AjaxAdapter      from '../helpers/AjaxAdapter.js'

// Init the Ajax Adapter, give it the fetch library
const ajax = new AjaxAdapter(fetch);

// create a React Component called _App_
export default class App extends React.Component {

  render(){
    return(
    <container>
      <Login />
      <CreateUser />
    </container>
    )
  }



}

ReactDOM.render(<App/>, document.querySelector('#container'))

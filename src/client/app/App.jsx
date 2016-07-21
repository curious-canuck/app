import React            from 'react'
import ReactDOM         from 'react-dom'
import SearchContainer  from './SearchContainer.jsx'


// create a React Component called _App_
export default class App extends React.Component{

  render(){
    return (
      <SearchContainer />
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))

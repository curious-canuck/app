import React            from 'react'
import ReactDOM         from 'react-dom'
import SearchContainer  from './SearchContainer.jsx'

export default class App extends React.Component{
  render(){
    return (
      <SearchContainer />
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#container'))

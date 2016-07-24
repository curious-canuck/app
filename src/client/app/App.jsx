import React            from 'react'
import ReactDOM         from 'react-dom'
import SearchContainer  from './SearchContainer.jsx'
import Login            from './Login.jsx'
import CreateUser       from './CreateUser.jsx'


export default class App extends React.Component{
  render(){
    return (
      <div>
        <CreateUser />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#container'))

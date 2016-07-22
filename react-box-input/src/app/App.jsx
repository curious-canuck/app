'use strict'
import React            from 'react'
import ReactDOM         from 'react-dom'
// import Dropmenu        from './Dropmenu.jsx'
// import util             from '../helpers/util.js'
import AjaxAdapter      from '../helpers/AjaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default class App extends React.Component{

    constructor() {
    super();
    this.state = {
    code: []
}

  }
componentDidMount(){
  const self = this
ajax.handleCountryList()
.then(function(data) {
  self.setState({code: data})
    })

}

// const handleSubmit= event=>{
//     event.preventDefault();

//     // const newTask ={
//     //   countryname: event.target.elements.code

//     // }

//     // fired the App's prop function
//     // props.addTask(newTask);
//     event.target.reset();
//   }

render() {
    return (
    <select name = "code" x  >
      {
  this.state.code.map(function(country, id) {

                return <option key={id} value={country.Code} > {country.Name} </option>
        })
      }


      </ select>


    )
}
}
ReactDOM.render(<App/>,document.querySelector('#container'));


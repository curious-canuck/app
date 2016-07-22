'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';
import SearchForm       from './SearchForm.jsx'

import AjaxAdapter      from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'

const ajax = new AjaxAdapter(fetch);

// create a React Component called _App_
export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      currentComments: {},
      currentCountry: ''
    }
  }

  // updateCurrentComments(code){
  //   ajax.getComments(code)
  //     .then(data=>{
  //       console.log(data)
  //       this.setState({
  //         currentComments: data.comments
  //       })
  //     })
  // }

  handleChange(e){
    let self = this
    console.log(this)
    ajax.getComments(e.target.value)
      .then(function(data){
        console.log("This is coming from handleChange",data)
        console.log(self)
        self.setState({
          currentComments: data
        })
      })
  }

  render(){
    return (
      <div>
        <select name="list"
          onChange={this.handleChange.bind(this)}
          value={this.state.currentCountry}>
          <option value="">Choose a Country</option>
          <option value="US">United States</option>
          <option value="BO">Bolivia</option>
        </select>
        {this.state.currentComments.comments? (
            this.state.currentComments.comments.map(function(each, id){
              return(
                <p key={id}><strong>{each.username}</strong>: {each.comment}</p>
              )
            })
          )
        : null
        }
      </div>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))

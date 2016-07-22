'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';
import SearchForm       from './SearchForm.jsx'
import CommentBox       from './CommentBox.jsx'
import CommentForm      from './CommentForm.jsx'

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

  // componentDidMount(){
  //   let self = this;
  //   if(self.state.currentCountry){
  //     ajax.getComments(self.state.currentCountry)
  //       .then(function(data){
  //         self.setState({
  //           currentCountry: self.state.currentCountry,
  //           currentComments: data
  //         })
  //       })
  //   }
  // }

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

  render(){
    console.log("App renders: ",this.state.currentComments, this.state.currentCountry)
    return (
      <div>
        <SearchForm
          handleChange={this.handleChange.bind(this)}
          currentCountry={this.state.currentCountry} />
        {this.state.currentComments.comments ?
          // <CommentBox
          //   currentComments={this.state.currentComments} />
          this.state.currentComments.comments.map(function(each, id){
            return <p key={id}><strong>{each.username}</strong>: {each.comment}</p>
          })
          : null
        }
        <CommentForm
          handleNewComment={this.handleNewComment.bind(this)}
          currentCountry={this.state.currentCountry}
         />
      </div>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))

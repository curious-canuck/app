
// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';
import SearchForm       from './Search.jsx'
import CommentBox       from './CommentBox.jsx'
import CommentForm      from './CommentForm.jsx'

import AjaxAdapter      from '../helpers/AjaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

// create a React Component called _App_
export default class CommentDisplay extends React.Component{

  render(){
    console.log("App renders: ",this.props.currentComments, this.props.currentCountry)
    return (
      <div className="john">
        {this.props.currentComments.comments ?
          this.props.currentComments.comments.map(function(each, id){
            return <p key={id}><strong>{each.username}</strong>: {each.comment}</p>
          })
          : null
        }
        <CommentForm
          handleNewComment={this.props.handleNewComment}
          currentCountry={this.props.currentCountry}
         />
      </div>
    )
  }
}

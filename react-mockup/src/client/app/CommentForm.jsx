import React from 'react';

export default function CommentForm(props){

  const handleSubmit = function(e){
    e.preventDefault();

    let comment = {
      username: e.target.username.value,
      comment: e.target.text.value
    }
    let code = e.target.code.value

    props.handleNewComment(comment, code)

    e.target.reset()
  }

  return (
    <div className="row">
    <div className="col-sm-3 fixed-left">
      <form onSubmit={handleSubmit} className="navbar-fixed-bottom">
        <input type="text" readOnly name="code" value={props.currentCountry} className="hide-input" />
        <input type="text" readOnly name="username" value={localStorage.user} className="hide-input" />
        <input type="textbox" name="text" placeholder="Enter comment" className="input-lg"/>
        <input type="submit" value="Send" className="input-sm" />
      </form>
    </div>
    </div>
  )

}

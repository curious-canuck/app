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
    <form onSubmit={handleSubmit} className="jumbotron">
      <input readOnly name="code" value={props.currentCountry} type="text" />
      <input type="text" name="username" placeholder="Enter username" />
      <input type="text" name="text" placeholder="Enter comment" />
      <input type="submit" value="Send" />
    </form>
  )

}

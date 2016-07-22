'use strict'

import React from 'react'

export default function CommentBox(props){

  if(props.commentState.comments){
    props.commentState.comments.map(function(comment, id){
      return(
        <p key={id}><strong>{comment.username}</strong>: {comment.comment}</p>
      )
    })
  } else {
    return(
      <p>Comment Section</p>
    )
  }

}

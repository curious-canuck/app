import React from 'react'

export default function CommentBox(props){

  return props.currentComments.comments.map(function(each, id){
    return <p key={id}><strong>{each.username}</strong>: {each.comment}</p>
  })
}

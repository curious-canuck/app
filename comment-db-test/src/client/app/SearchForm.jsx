'use strict'

import React            from 'react'
import CommentBox       from './CommentBox.jsx'

export default function SearchForm(props){

  const updateCountry = function(e){
    console.log(e.target.value)
    props.updateComments(e.target.value)
  }

  return(
      <div>
        <select name="list"
          onChange={updateCountry}
          value={props.countryState}>
          <option value="">Choose a Country</option>
          <option value="US">United States</option>
          <option value="BO">Bolivia</option>
        </select>
        {props.commentState.comments? (
            props.commentState.comments.map(function(each, id){
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

'use strict'

import React from 'react'

export default function SearchForm(props){

  const handleChange = function(e){
    console.log(e.target.value)
    props.handleChange(e.target.value)
  }

  return(
    <div>
      <select name="list"
        onChange={handleChange}
        value={props.currentCountry}>
        <option value="">Choose a Country</option>
        <option value="US">United States</option>
        <option value="BO">Bolivia</option>
      </select>
    </div>
  )

}

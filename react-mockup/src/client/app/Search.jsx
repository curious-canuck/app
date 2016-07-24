import React        from 'react';
import AjaxAdapter  from '../helpers/AjaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default function Search(props){

  const handleChange = function(e){
    console.log(e.target.value)
    props.onSubmitSearch(e.target.value);
  }

  return (
    <select
      name="code"
      onChange={handleChange}
      value={props.countryCode}>
        <option value="">Choose a Country</option>
        {props.countryData.map(function(country, id) {
          return <option key={id} value={country.Code}>{country.Name}</option>
          })
        }
    </select>
  )

}

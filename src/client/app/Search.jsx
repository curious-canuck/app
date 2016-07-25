import React        from 'react';
import AjaxAdapter  from '../helpers/ajaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default function Search(props){

  const handleChange = function(e){
    console.log(e.target.value)
    props.onSubmitSearch(e.target.value);
  }

  return (
    <div className="dropdown">
      <select
        name="code"
        onChange={handleChange}
        value={props.countryCode}
        className="btn btn-danger">
          <option value="">Choose a Country</option>
          {props.countryData.map(function(country, id) {
            return <option key={id} value={country.Code}>{country.Name}</option>
            })
          }
      </select>
    </div>
  )

}

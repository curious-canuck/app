import React        from 'react';
import AjaxAdapter  from '../helpers/AjaxAdapter.js'

const ajax = new AjaxAdapter(fetch);

export default class Search extends React.Component{

  constructor() {
    super();
    this.state = {
      code: []
    }
  }

  componentDidMount(){
    const self = this
    ajax.handleCountryList()
    .then(function(data) {
      self.setState({code: data})
    })
  }

  render() {
    return (
    <select name="code">
      <option value="">Choose a Country</option>
      {this.state.code.map(function(country, id) {
        return <option key={id} value={country.Code}>{country.Name}</option>
        })
      }
    </select>
    )
  }


}











'use strict'
const App = React.createClass({

  getInitialState() {
    return {
      code: []
    }
  },

  render() {
      let self = this
     fetch('/dropd')
      .then(r => r.json())
      .then(function(data) {
        self.setState({code: data})

        console.log(self.state.code)
      });
    return (

      < select name = "code" > {
        this.state.code.map(function(country, id) {
          return <option key = {
            id
          }
          value = {
            country.Code
          } > {
            country.Name
          } < /option>

        })
      } < /select>

    )

}
})


ReactDOM.render( < App / > ,
  document.querySelector('#container')
);

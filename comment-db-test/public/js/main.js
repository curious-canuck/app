

const CommentDisplay = React.createClass({
  getCountryComments(){
    return fetch('/comments')
      .then(r=>r.json)
      .then(data=>{
        this.props.updateCurrentCountry(data)
      })
      .catch((error) => {
        console.error(error);
      });
  },

  render(){
    return (
      <div>
        <h1>{this.props.currentCountry}</h1>
        {this.props.currentComments.map(function(comment, id){
          return (
            <p key={id}><strong>{comment.username}</strong>: {comment.comment}</p>
          )
        })}
      </div>
    )

  }

})

const CommentForm = React.createClass({

  sendComment(country){
    return fetch(`/comments/add/${country.Code}`,{
        method:'PUT',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(country)
      })
      .then( r=> r.json() )
      .then(data=>{
        this.props.updateCurrentComments(data)
      })
      .catch((error) => {
        console.error(error);
      });
  },

  render(){
    return (
      <form onSubmit={this.sendComment}>
        <input type="text" name="countryCode" placeholder="Enter country code" />
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="commentInput" placeholder="Enter Comment" />
        <button type="submit">Send</button>
      </form>
    )
  }

})

const App = React.createClass({

  getInitialState(){
    return {
      currentComments: [],
      currentCountry: []
    }
  },

  updateCurrentComments(data){
    console.log("From comments", data.comments)

    this.state.currentComments[ data.Code ] = data
    this.setState({
      currentComments: this.state.currentComments
    })
  },

  updateCurrentCountry(data){
    console.log("From Country", data.Name)

    this.setState({
      currentCountry: data.Name
    })
  },

  render(){
    return (
      <div>
        <h1></h1>
        <CommentDisplay currentComments={this.state.currentComments} currentCountry={this.state.currentCountry} updateCurrentCountry={this.updateCurrentCountry} />
        <CommentForm updateCurrentComments={this.updateCurrentComments} />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.querySelector('#container')
)

import React      from 'react';
import Header     from './Header.jsx'

export default class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      isLoginClicked: false,
      isCreateUserClicked: false
    }
  }

  toggleLoginClick(){
    this.setState({
      isLoginClicked: !this.state.isLoginClicked,
      isCreateUserClicked: false
    })
  }

  toggleCreateUserClick(){
    this.setState({
      isCreateUserClicked: !this.state.isCreateUserClicked,
      isLoginClicked: false
    })
  }

  handleLoginSubmit(e){
    let self=this
    e.preventDefault()
    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    fetch('/userapi/authenticate',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(data=>{
      return data.json()
    })
    .then(data=>{
      console.log(data.token);
      console.log(data.username)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.username)
      self.props.toggleLogin()
    })

    console.log(this)
  }

  handleCreateUserSubmit(e){
    let self=this
    e.preventDefault()
    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    console.log(data)
    fetch('/userapi/users',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(data=>{
      console.log(this)
    })
  }

  timeoutToggle(){
    console.log("from timeout", this)
    setTimeout(this.props.toggleLogin(), 10000)
  }

  render(){
    let self=this;
    if(this.props.isLoggedIn){
      return <Header toggleLogin={this.props.toggleLogin} />
    } else {
      return(
        <div className="navbar navbar-default navbar-fixed-bottom text-center">

          {this.state.isLoginClicked ?
            <form onSubmit={this.handleLoginSubmit.bind(this)} className="input-group">
              Log In:
              <input type="text" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password"/>
              <button type="submit">Login</button>
            </form>
           : <button onClick={this.toggleLoginClick.bind(this)}>Login</button>
          }

          {this.state.isCreateUserClicked ?
            <form onSubmit={this.handleCreateUserSubmit.bind(this)} >
              <label>Name:</label>
              <input type="text" name="name"/>
              <label>Email:</label>
              <input type="text" name="email"/>
              <label>Password:</label>
              <input type="password" name="password"/>
              <input type="submit" value="Submit" />
            </form>
            : <button onClick={this.toggleCreateUserClick.bind(this)}>Create User</button>
          }
        </div>
      )
    }
  }

}

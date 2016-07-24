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
      if (data.token) {localStorage.setItem('token', data.token)}
      if (data.username) {localStorage.setItem('user', data.username)}
      self.props.toggleLogin()
    })

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
        <div className="navbar navbar-default navbar-fixed-bottom text-center footer">

          {this.state.isLoginClicked ?
            <form onSubmit={this.handleLoginSubmit.bind(this)} className="text-center input-group form-inline float-left">
              <label className="black">E-mail:</label>
              <input type="text" name="email" placeholder="Email" className="black"/>
              <label className="black">Password:</label>
              <input type="password" name="password" placeholder="Password" className="black"/>
              <input type="submit" value="submit" className="btn btn-danger start"/>
            </form>
           : <button className="text-center btn btn-danger start" onClick={this.toggleLoginClick.bind(this)}>Login</button>
          }

          {this.state.isCreateUserClicked ?
            <form onSubmit={this.handleCreateUserSubmit.bind(this)} className="input-group text-center form-inline float-left">
              <label className="black">Name:</label>
              <input type="text" name="name" className="black"/>
              <label className="black">Email:</label>
              <input type="text" name="email" className="black"/>
              <label className="black">Password:</label>
              <input type="password" name="password" className="black"/>
              <input type="submit" value="submit" className="btn btn-danger start" />
            </form>
            : <button className="text-center btn btn-danger start" onClick={this.toggleCreateUserClick.bind(this)}>Create User</button>
          }
        </div>
      )
    }
  }

}

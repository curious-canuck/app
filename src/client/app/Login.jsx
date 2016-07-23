import React from 'react';

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

  toggleCreatUserClick(){
    this.setState({
      isCreateUserClicked: !this.state.isCreateUserClicked,
      isLoginClicked: false
    })
  }

  handleLoginSubmit(e){
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
    }).then(data=>
      {console.log(data.token);
      console.log(data.username)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.username)
      }
    )
  }

  handleCreateUserSubmit(e){
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
      console.log(data)
    })
  }

  render(){
    let self=this;
    return(
      <div className="navbar navbar-default navbar-fixed-bottom text-center">

        {this.state.isLoginClicked ?
          <form onSubmit={this.handleLoginSubmit} className="input-group">
            Log In:
            <input type="text" name="loginemail" placeholder="Email"/>
            <input type="password" name="loginpassword" placeholder="Password"/>
            <input type="submit" />
          </form>

         : <button onClick={this.toggleLoginClick.bind(this)}>Login</button>
        }


        {this.state.isCreateUserClicked ?
          <form onSubmit={this.handleCreateUserSubmit} >
            <label>Name:</label>
            <input type="text" name="name"/>
            <label>Email:</label>
            <input type="text" name="email"/>
            <label>Password:</label>
            <input type="password" name="password"/>
            <input type="submit" value="Create User"/>
          </form>

          : <button onClick={this.toggleCreatUserClick.bind(this)}>Create User</button>
        }
      </div>
    )
  }

}

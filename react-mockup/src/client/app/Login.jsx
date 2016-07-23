import React from 'react';

export default class Login extends React.Component {

handleSubmit(e){
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

clearLocalStorage(e){
  e.preventDefault()
  localStorage.setItem('token','')
  localStorage.setItem('user','')
  console.log('cleared out of local storage')
}



  render(){
    return(
      <div className="navbar navbar-default navbar-fixed-bottom text-center">
        <form onSubmit={this.handleSubmit} className="input-group">
          Log In:
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" />
        </form>
        <button onClick={this.clearLocalStorage}>Logout</button>
      </div>
    )
  }

}

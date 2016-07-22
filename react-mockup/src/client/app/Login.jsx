import React from 'react';

export default class Login extends React.Component {
  render(){
    return(
      <div className="navbar navbar-default navbar-fixed-bottom text-center">
        <form className=""input-group"">
        Log In:
        <input type="text" placeholder="User Name"/>
        <input type="password" placeholder="Password"/>
        <input type="submit" /> Create User
        </form>
      </div>
    )
  }

}

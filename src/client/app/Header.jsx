import React from 'react';

export default function Header(props){

  const emptyLocalStorage= function(){
    localStorage.setItem('token', '')
    localStorage.setItem('user', '')
    props.toggleLogin()

  }

  if(localStorage.token){
    return(
      <header className="navbar navbar-default navbar-fixed-top text-center black">
        <h3 className="capitalize float-left">Heya {localStorage.user}</h3>
        <button onClick={emptyLocalStorage} className="btn btn-danger start float-right">Logout</button>
      </header>
    )
  }

}

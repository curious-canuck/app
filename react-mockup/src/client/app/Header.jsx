import React from 'react';

export default function Header(props){

  const emptyLocalStorage= function(){
    console.log("Clicked")
    console.log(localStorage)
    localStorage.setItem('token', '')
    localStorage.setItem('user', '')
    console.log(localStorage)
    props.toggleLogin()
    console.log(props.isLoggedIn)
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

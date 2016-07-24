import React from 'react';

export default function Header(props){

  const emptyLocalStorage= function(){
    console.log("Clicked")
    console.log(localStorage)
    localStorage.token = ""
    console.log(localStorage)
    props.toggleLogin()
    console.log(props.isLoggedIn)
  }

  if(localStorage.token){
    return(
      <header className="navbar navbar-default navbar-fixed-top text-center">
        <h2>Heya {localStorage.user}</h2>
        <button onClick={emptyLocalStorage}>Logout</button>
      </header>
    )
  }

}

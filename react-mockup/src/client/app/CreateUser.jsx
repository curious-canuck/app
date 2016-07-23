import React from 'react';

export default class CreateUser extends React.Component {

handleSubmit(e){
  e.preventDefault()
  let data = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
  }
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
    return(
        <form onSubmit={this.handleSubmit} >
            <label>Name:</label>
            <input type="text" name="name"/><br/>
            <label>Email:</label>
            <input type="text" name="email"/><br/>
            <label>Password:</label>
            <input type="password" name="password"/><br/>
            <input type="submit" value="Create New User"/>
        </form>
    )
  }

}

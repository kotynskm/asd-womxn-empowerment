import { Label } from '@mui/icons-material';
import React, { useState } from 'react'

const Login = () => {
  
  const handleLogin =(e)=>{
    e.preventDefault()
    console.log(e);

    const loginObj = {
      name: e.target.form[0].value,
      password: e.target.form[1].value
    }
    console.log('login Obj----', loginObj)
    //change to async/await
    fetch('/login', {
      method: 'POST', // or 'PUT'
      headers: {
      'Content-Type': 'application/json',
       },
       body: JSON.stringify(loginObj),  
      })
      .then((response) => response.json())
      .then((data) => {
      console.log('Success:', data);
       })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  const LoginForm = () => {

    return (
      <>
        <form>
          <label>
            {' '}
            Username
            <input type="text" />
          </label>
          <label> Password
            <input type="password"></input>
          </label>
          <input type="submit" onClick={(e) => handleLogin(e)}></input>
        </form>
      </>
    );
  }


  return (
    <div className = "login">
      <LoginForm />
    </div>
  )
}

export default Login;
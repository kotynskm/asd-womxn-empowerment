import React, { useState } from 'react'

const Login = () => {
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginObj = {
      name: e.target.form[0].value,
      password: e.target.form[1].value
    };

    try {
      const response = await fetch('/login', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginObj)
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      const ssid = response.headers.get('set-cookie');
      console.log(ssid);
    } catch(error){
      console.log('error in handleLogin fetch request:', error);
    }
  };

    return (
      <>
        <form>
          <label>
            Username
            <input type="text" />
          </label>
          <br></br>
          <label>
            Password
            <input type="password" />
          </label>
          <br></br>
          <input type="submit" onClick={(e) => handleLogin(e)}></input>
        </form>
      </>
    );
  }




export default Login;
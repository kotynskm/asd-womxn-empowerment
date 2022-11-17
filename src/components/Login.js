import React from 'react'

const Login = () => {

  // const handleLogin =()=>{
  //   fetch('/login', )
  // }
  return (
    <div className = "login">
      <form>
        <input></input>
        <input type='submit' onClick={
          (e)=>{
            e.preventDefault()
            console.log('click')
            }
          }>
          </input>
      </form>
    </div>
  )
}

export default Login;
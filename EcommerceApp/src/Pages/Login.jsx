import React from 'react'

const Login = () => {
  return (
    <>
       <div className='login-page'>
            <div className='login-main'>
                <h1 className='login-heading'>Login</h1>
                <div className='login-sec'>
                    <label className='login-label'>Username:</label>
                    <input type="text"  className='login-input'/>
                </div>
                <div className='login-sec'>
                    <label className='login-label'>Password:</label>
                    <input type="password"  className='login-input'/>
                </div>
                <div className='login-buttons'>
                    <button className='button1'>Submit</button>
                </div>
            </div>
       </div>
    </>
  )
}

export default Login

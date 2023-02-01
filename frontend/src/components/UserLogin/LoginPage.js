import React from 'react';
import './LoginPageStyle.css'

function LoginPage() {
  return (
    <div className="login-container">
    <div className="form-box">
        <h1>Log In</h1>
        <form action="">
            <div className="login-input-group">
                <div className="input-field">
                    <i className="fa-regular fa-envelope"></i>
                    <input className='login-input' type="email" name="" id="" placeholder="Email"/>
                </div>
                <div className="input-field">
                    <i className="fa-solid fa-lock"></i>
                    <input className='login-input' type="password" name="" id="" placeholder="Password"/>
                </div> 
                <p>forgot password ?<a href='/#'>Click here</a></p>
            </div>
            <div className="btn-field">
                <button type="button">Log In</button>
            </div>
        </form>
    </div>
    </div> )
  }

export default LoginPage
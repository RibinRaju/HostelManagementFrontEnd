import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="container">
        <h2>LOGIN HERE</h2>
        <form action="/useractivities" method="get">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
            <a href="forgetpassword.html" id="link">Forgot password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;

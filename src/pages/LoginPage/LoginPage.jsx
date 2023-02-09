import React from 'react';
import logo from '../../assets/svgs/ic_logo.svg';
import './loginPage.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="background-image" />
      <div className="login-right">
        <img src={logo} alt="logo"></img>
        <div className="greetings"> Welcome, login to your account! </div>
        <form>
          <span class="custom-text-input">
            <input type={'email'} required placeholder="Enter email" />
            <span class="floating-label">Login</span>
          </span>

          <span class="custom-text-input">
            <input type={'password'} required placeholder="Enter password" />
            <span class="floating-label">Password</span>
          </span>

          <div className="remember-checkbox">
            <label className="custom-checkbox">
              <input type={'checkbox'} />
              <span class="checkmark"></span>
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button>Login now</button>
        </form>
        <div>
          Don’t have an account yet?&nbsp; &nbsp;
          <a href="#">Sign up!</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

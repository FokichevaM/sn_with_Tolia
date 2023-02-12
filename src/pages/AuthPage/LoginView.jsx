import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.scss';

const LoginView = () => {
  return (
    <div>
      <div className="title"> Welcome, login to your account! </div>
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
      <div className="footer-question-box">
        Don’t have an account yet?&nbsp; &nbsp;
        <Link to="/signup">Sign up!</Link>
      </div>
    </div>
  );
};

export default LoginView;

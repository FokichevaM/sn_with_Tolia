import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.scss';

const SignUpView = () => {
  return (
    <div>
      <div className="title">Basic information</div>
      <form>
        <span class="custom-text-input">
          <input type={'text'} required placeholder="Enter email" />
          <span class="floating-label">Login</span>
        </span>

        <span class="custom-text-input">
          <input type={'email'} required placeholder="Enter password" />
          <span class="floating-label">E-mail</span>
        </span>

        <div className="horizontal-input-box">
          <span class="custom-text-input width-50">
            <input type={'text'} required placeholder="Enter password" />
            <span class="floating-label">Name</span>
          </span>

          <span class="custom-text-input width-50">
            <input type={'text'} required placeholder="Enter password" />
            <span class="floating-label">Surname</span>
          </span>
        </div>

        <span class="custom-text-input">
          <input type={'password'} required placeholder="Enter password" />
          <span class="floating-label">Password</span>
        </span>

        <div className="horizontal-input-box">
          <span class="custom-text-input width-70">
            <input type={'text'} required placeholder="Enter password" />
            <span class="floating-label">City</span>
          </span>

          <span class="custom-text-input width-30">
            <input type={'number'} required placeholder="Enter password" />
            <span class="floating-label">Age</span>
          </span>
        </div>

        <button>CONTINUE</button>
      </form>
      <div className="footer-question-box">
        You already have an account? &nbsp; &nbsp;
        <Link to="/login">Log in!</Link>
      </div>
    </div>
  );
};

export default SignUpView;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../components/AuthLayout';

import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const push = useNavigate();

  const isValid = !!email.length && !!password.length;

  const login = () => {
    push('/home');
  };

  return (
    <AuthLayout>
      <>
        <div className="title"> Welcome, login to your account! </div>
        <form>
          <span className="custom-text-input">
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type={'email'}
              placeholder="Enter email"
              required
            />
            <span className="floating-label">E-mail</span>
          </span>

          <span className="custom-text-input">
            <input
              onChange={(e) => setPassword(e.currentTarget.value)}
              type={'password'}
              placeholder="Enter password"
              required
            />
            <span className="floating-label">Password</span>
          </span>

          <div className="remember-checkbox">
            <label className="custom-checkbox">
              <input type={'checkbox'} />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/reset">Forgot password?</Link>
          </div>

          <button disabled={!isValid} className="lg" onClick={login}>
            Login now
          </button>
        </form>
        <div className="footer-question-box">
          Don’t have an account yet?&nbsp; &nbsp;
          <Link to="/signup">Sign up!</Link>
        </div>
      </>
    </AuthLayout>
  );
};

export default LoginPage;

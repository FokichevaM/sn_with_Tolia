import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '../../components/AuthLayout';

const ResetPage = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');

  const isValid = !!email.length && !!login.length;

  return (
    <AuthLayout>
      <>
        <div className="title"> Reset your password </div>

        <form>
          <span className="custom-text-input">
            <input
              onChange={(e) => setLogin(e.currentTarget.value)}
              type={'text'}
              placeholder="Enter login"
              required
            />
            <span className="floating-label">Login</span>
          </span>

          <span className="custom-text-input">
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type={'email'}
              placeholder="Enter email"
              required
            />
            <span className="floating-label">E-mail</span>
          </span>

          <button disabled={!isValid}>RESET</button>
        </form>

        <div className="footer-question-box">
          Go back to &nbsp;
          <Link to="/login" className="lg">
            login screen
          </Link>
        </div>
      </>
    </AuthLayout>
  );
};

export default ResetPage;

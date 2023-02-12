import React from 'react';
import './AuthPage.scss';
import logo from '../../assets/svgs/ic_logo.svg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginView from './LoginView';
import SignUpView from './SignUpView';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="background-image" />
      <div className="login-right">
        <img src={logo} alt="logo"></img>
        <Routes>
          <Route path="login" element={<LoginView />} />
          <Route path="signup" element={<SignUpView />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;

import React from 'react';

import logo from '../../assets/svg/ic_logo.svg';

import './AuthLayout.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="background-image" />
      <div className="layout-right">
        <img src={logo} alt="logo"></img>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;

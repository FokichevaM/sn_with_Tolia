import React from 'react';
// import { Link } from 'react-router-dom';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import RightSidebar from '../RightSidebar/RightSidebar';

import './MainLayout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="container">
        <div className="row h-100">
          <div className="col-md-3">
            <NavigationMenu />
          </div>
          <div className="col-md-6" style={{ backgroundColor: 'orange' }}>
            {children}
          </div>
          <div className="col-md-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

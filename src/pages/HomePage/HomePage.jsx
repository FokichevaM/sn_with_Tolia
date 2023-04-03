import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import MainLayout from '../../components/MainLayout/MainLayout';
import Events from '../../components/Events';

import './HomePage.scss';
import CustomScrollbar from '../../components/common/CustomScrollbar';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <MainLayout>
      <div className="home-page">
        <div className="top-pannel">
          <div className="greetings">Welcome, Tomasz!</div>
          <div className="link">Events</div>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab == '1' ? 'active' : ''}
              onClick={() => setActiveTab('1')}
            >
              Current
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == '2' ? 'active' : ''}
              onClick={() => setActiveTab('2')}
            >
              Completed
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Events />
          </TabPane>
          <TabPane tabId="2">
            <Events />
          </TabPane>
        </TabContent>
      </div>
    </MainLayout>
  );
};

export default HomePage;

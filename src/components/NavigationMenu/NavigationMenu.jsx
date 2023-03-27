import React from 'react';
import { NavLink } from 'react-router-dom';

import SiteLogo from '../common/SiteLogo/SiteLogo';

import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg';
import { ReactComponent as TeamIcon } from '../../assets/svg/teams.svg';
import { ReactComponent as MailIcon } from '../../assets/svg/mail.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import { ReactComponent as LogOutIcon } from '../../assets/svg/logout-icon.svg';

import './NavigationMenu.scss';

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <SiteLogo />
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams">
            <TeamIcon />
            My teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <MailIcon />
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <UserIcon />
            Profile
          </NavLink>
        </li>
      </ul>

      <button className="create-team-btn">CREATE A TEAM</button>

      <button className="log-out-btn">
        <LogOutIcon />
        LOG OUT
      </button>
    </div>
  );
};
export default NavigationMenu;

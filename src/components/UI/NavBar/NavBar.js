import React, { useContext } from 'react';
import classes from './NavBar.module.css';

import { NavLink } from 'react-router-dom';

import AuthContext from '../../../context/auth-context';

import BellIcon from '../../../assets/icons/BellIcon';
import EnvelopeIcon from '../../../assets/icons/EnvelopeIcon';
import ChartIcon from '../../../assets/icons/ChartIcon';
import LightbulbIcon from '../../../assets/icons/LightbulbIcon';
import SignOutIcon from '../../../assets/icons/SignOutIcon';
import UsersIcons from '../../../assets/icons/UsersIcon';

const NavBar = ({ children }) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className={classes['nav-bar-container']}>
      <nav className={classes['nav-bar']}>
        <ul>
          <li>
            <NavLink to={'/statistics'} activeClassName={classes['active-tab']}>
              <ChartIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/notifications'}
              activeClassName={classes['active-tab']}
            >
              <BellIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/email'} activeClassName={classes['active-tab']}>
              <EnvelopeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/sugestions'} activeClassName={classes['active-tab']}>
              <LightbulbIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/users'} activeClassName={classes['active-tab']}>
              <UsersIcons />
            </NavLink>
          </li>
          <li>
            <button
              className={classes['logout-button']}
              onClick={logoutHandler}
            >
              <SignOutIcon />
            </button>
          </li>
        </ul>
      </nav>
      <div className={classes['content-area']}>{children}</div>
    </div>
  );
};

export default NavBar;

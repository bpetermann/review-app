import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Menue.module.css';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        <h2 className={classes.title}>
          <Link to='/home'>Review App</Link>{' '}
        </h2>
        <NavLink
          activeClassName={classes.active}
          to='/overview'
          className={classes.navLink}
        >
          All Reviews
        </NavLink>
      </div>
      {props.isLoggedIn ? (
        <button className={classes.logoutBtn} onClick={props.userLogout}>
          Logout
        </button>
      ) : (
        <button className={classes.loginBtn} onClick={props.userLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';

import { auth, provider } from '../firebase/firebase-config';
import { signInWithPopup } from 'firebase/auth';

const Header = (props) => {
  const { setIsLoggedIn } = props;
  
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsLoggedIn(true);
    });
  };

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
        <NavLink
          activeClassName={classes.active}
          to='/add'
          className={classes.navLink}
        >
          Add Review
        </NavLink>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.loginBtn} onClick={signIn}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        <h2>Review App</h2>
        <button className={classes.navBtn}>All Reviews</button>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.loginBtn}>Login </button>
      </div>
    </div>
  );
};

export default Header;

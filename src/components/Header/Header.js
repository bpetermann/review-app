import React from 'react';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.headline}>{props.children}</h1>
    </div>
  );
};

export default Header;

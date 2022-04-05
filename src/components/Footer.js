import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <ul className={classes.navbar}>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/test'>Test</a>
          </li>
          <li>
            <a href='https://github.com/bpetermann/shopping-cart'>About</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Footer;

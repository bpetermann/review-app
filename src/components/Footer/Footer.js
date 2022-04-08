import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <ul className={classes.navbar}>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/overview'>All Reviews</Link>
          </li>
          <li>
            <a href='https://github.com/bpetermann/'>About</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Footer;

import React from 'react';
import classes from './Searchbar.module.css';
import background from '../images/background.png';

const Searchbar = (props) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes.searchBackground}>
        <div className={classes.searchWrapper}>
          <input className={classes.search} type='text' placeholder='Search' />
          <button className={classes.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

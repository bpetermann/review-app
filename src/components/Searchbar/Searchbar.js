import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Searchbar.module.css';
import background from '../../images/background.png';

import DUMMY_LOCATIONS from '../../database/locations';

const Searchbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  let location = '/overview';

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  let searchTermMatch = DUMMY_LOCATIONS.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTermMatch.length === 1) {
    location = `/titles/${searchTermMatch[0].id}`;
  }

  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes.searchBackground}>
        <div className={classes.searchWrapper}>
          <img
            src={require('../../images/glass.png')}
            alt='Magnifying glass'
            className={classes.glassImage}
          />
          <input
            onChange={searchTermChangeHandler}
            className={classes.search}
            type='text'
            placeholder='Search'
            value={searchTerm}
          />
          <Link to={location} className={classes.searchBtn}>
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

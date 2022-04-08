import React from 'react';

import classes from './Locations.module.css';
import LocationOverview from '../Locations/LocationOverview';
import Header from '../Header/Header';

const Locations = (props) => {
  return (
    <React.Fragment>
      <Header>All Reviews</Header>
      <div className={classes.container}>
        <LocationOverview locations={props.locations} />
      </div>
    </React.Fragment>
  );
};

export default Locations;

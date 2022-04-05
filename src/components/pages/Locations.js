import React from 'react';

import classes from './Locations.module.css';
import LocationItem from '../Locations/LocationItem';

const Locations = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <LocationItem locations={props.locations} />
      </div>
    </React.Fragment>
  );
};

export default Locations;

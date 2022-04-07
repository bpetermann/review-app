import React from 'react';

import classes from './Locations.module.css';
import LocationOverview from '../Locations/LocationOverview';

const Locations = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <LocationOverview locations={props.locations}/>
      </div>
    </React.Fragment>
  );
};

export default Locations;

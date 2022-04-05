import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LocationItem.module.css';

const LocationItem = (props) => {
  return (
    <React.Fragment>
      {props.locations.map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <h3>{item.name}</h3>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
            <p>{item.description}</p>
            <Link to={`/titles/${item.id}`} className={classes.readMoreBtn}>
              Read More
            </Link>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default LocationItem;

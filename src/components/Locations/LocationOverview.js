import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LocationOverview.module.css';

const LocationOverview = (props) => {
  return (
    <React.Fragment>
      {props.locations.map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
            <h3>{item.id}</h3>
            <div className={classes.tagContainer}>
              {item.tags.map((item) => {
                return (
                  <span className={classes.tags} key={item}>
                    {item}
                  </span>
                );
              })}
            </div>
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

export default LocationOverview;

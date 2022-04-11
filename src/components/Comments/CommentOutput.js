import React from 'react';
import classes from './CommentOutput.module.css';

const CommentOutput = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.CommentList}>
        {props.comments.map((item) => {
          return (
            <li className={classes.CommentLiItem} key={item.id}>
              <h4 className={classes.author}>{item.author.name}</h4>
              <p>{item.comment}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default CommentOutput;

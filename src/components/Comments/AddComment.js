import React, { useState } from 'react';
import classes from './AddComment.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase-config';
import uniqid from 'uniqid';

const AddComment = (props) => {
  const [enteredComment, setEnteredComment] = useState('');

  const descriptionChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const commentCollectionRef = collection(db, `${props.id} Comments`);

  const onSubmitComment = async (e) => {
    e.preventDefault();
    await addDoc(commentCollectionRef, {
      comment: enteredComment,
      id: uniqid(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      date: new Date(),
    });
    setEnteredComment('');
    props.newComment();
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={onSubmitComment}>
        <textarea
          onChange={descriptionChangeHandler}
          value={enteredComment}
          id='description'
          placeholder='Comment'
          type='text'
          required
        />
        <button className='add' type='submit'>
          Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddComment;

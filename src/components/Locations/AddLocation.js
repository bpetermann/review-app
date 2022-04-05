import React, { useState } from 'react';
import classes from './AddLocation.module.css';

const AddLocation = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const onSubmitLocation = (event) => {
    event.preventDefault();

    const newLocation = {
      name: enteredName,
      description: enteredDescription,
    };
    console.log(newLocation);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmitLocation}>
        <label htmlFor='location'>Location:</label>
        <input
          onChange={nameChangeHandler}
          value={enteredName}
          id='location'
          placeholder='Location Name'
          type='text'
          required
        />
        <label htmlFor='description'>Description:</label>
        <input
          onChange={descriptionChangeHandler}
          value={enteredDescription}
          id='description'
          placeholder='Location Description'
          type='text'
          required
        />
        <button className='add' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddLocation;

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.length>0) {
      setIsInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isInputValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
    // <label style={{color: !isInputValid? 'red':'black' }}>Course Goal</label>
    // <input type="text" onChange={goalInputChangeHandler}  style={{borderColor: !isInputValid? 'red': '#ccc', background:  !isInputValid? 'salmon':'transparent'}}/>
  );
};

export default CourseInput;

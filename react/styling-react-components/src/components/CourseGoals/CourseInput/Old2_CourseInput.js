import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div `
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? '#f15877' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fce2f3;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isInputValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
    // <label style={{color: !isInputValid? 'red':'black' }}>Course Goal</label>
    // <input type="text" onChange={goalInputChangeHandler}  style={{borderColor: !isInputValid? 'red': '#ccc', background:  !isInputValid? 'salmon':'transparent'}}/>
  );
};

export default CourseInput;

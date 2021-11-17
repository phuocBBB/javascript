import React, { useState, useRef } from "react";

import Wrapper from '../Helpers/Wrapper';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    // if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
    if (nameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+ageInputRef.current.value < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(nameInputRef.current.value, ageInputRef.current.value);
    // console.log(enteredUserName, enteredAge);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const usernameHandler = (e) => {
    // setEnteredUserName(e.target.value);
    
  };

  const ageHandler = (e) => {
    // setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            onChange={usernameHandler}
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            onChange={ageHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

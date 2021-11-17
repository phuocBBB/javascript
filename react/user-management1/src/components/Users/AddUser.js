import React, {useState, useRef} from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";
import styles from "./AddUser.module.css";


const AddUser = (props) => {
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [error, setError] = useState();
  const userNameRef = useRef();
  const ageRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (userNameRef.current.value === '') {
      setError({
        title: 'Input Error',
        message: 'Username is empty!'
      });
      setIsUserNameValid(false);
      userNameRef.current.focus();
      return;
    }

    if (ageRef.current.value === '' || +ageRef.current.value < 0) {
      setError({
        title: 'Input Error',
        message: 'Age is empty or negative number!'
      });
      setIsAgeValid(false);
      ageRef.current.focus();
      return;
    }

    props.onAddUser(userNameRef.current.value, ageRef.current.value);
    
    userNameRef.current.value = '';
    ageRef.current.value = '';
  };

  const onChangeNameHandler = (e) => {
    if (e.target.value.length > 0) {
      setIsUserNameValid(true);
    }
  };

  const onChangeAgeHandler = (e) => {
    if (e.target.value.length > 0) setIsAgeValid(true);
  }

  const onConfirmHandler = () => {
    setError(null);
  };


  return <React.Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler} />}
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label className={`${!isUserNameValid && styles.invalid}`}>Username
          <input type='text' ref={userNameRef} onChange={onChangeNameHandler} />
        </label>
        <label className={`${!isAgeValid && classes.invalid}`}>Age(Years)
          <input type='number' ref={ageRef} onChange={onChangeAgeHandler} />
        </label>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  </React.Fragment>;
};

export default AddUser;
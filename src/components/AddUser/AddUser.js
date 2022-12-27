import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../Card/Card'
import Button from '../UI/Button/Button'
import ErrorModal from '../Modal/ErrorModal';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModalParam, setShowModalParam] = useState(false);

  const showErrorModal= (msg) => {
    setErrorMessage(msg);
    setShowModalParam(true);
  };

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = event => {
    setEnteredAge(event.target.value);
  };


  const formSubmitHandler = event => {
    event.preventDefault();

    const name = event.target.querySelectorAll("input")[0].value;
    const age = Number(event.target.querySelectorAll("input")[1].value);
    if (name.trim().length === 0) {
      showErrorModal("Name can't be blank");
    } else if (age <= 0) {
      showErrorModal("Please enter a valid age (>0).");
    } else {
      props.onAddUser(enteredName, enteredAge);
      event.target.reset();
    }
  };

  const onClick = () => {
    setShowModalParam(false);
  };
  
  return (
    <div>
      <ErrorModal show={showModalParam} error={errorMessage} onClick={onClick}></ErrorModal>
      
      <Card className={styles['add-user']}>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input type="text" onChange={nameInputChangeHandler}/>
          <label>Age (Years)</label>
          <input type="text" onChange={ageInputChangeHandler}/>
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
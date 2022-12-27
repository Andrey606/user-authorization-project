import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser/AddUser'
import UserList from './components/UserList/UserList'
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: enteredName, age: enteredAge,  id: Math.random().toString() });
      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList items={users}></UserList>
    </div>
  );
}

export default App;

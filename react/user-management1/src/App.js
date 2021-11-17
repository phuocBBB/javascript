import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css';


function App() {

  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id:Math.random(), username:username, age:age}];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;

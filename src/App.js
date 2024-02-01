import './App.css';
import { useEffect, useState } from 'react';
import Users from './UsersComponents/Users.js';

const App = () => {
  const [users, setUsers] = useState([]);

  const title = "User List"

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUsers(data)
    } catch { }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <Users users={users} />
    </div>
  )
}

export default App;



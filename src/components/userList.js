import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/users/`).then(response => setUsers(response.data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.googleId}>{user.name} &lt;{user.email}&gt;</li>
      ))}
    </ul>
  );
}

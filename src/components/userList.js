import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BASE_URL = 'http://localhost:8000';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const userInfo = useSelector(s => s.userInfo);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/`)
      .then(response =>
        setUsers(
          response.data.filter(user => user.googleId !== userInfo.googleId)
        )
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return users.length > 0 ? (
    <ul>
      {users.map(user => (
        <li key={user.googleId}>
          <a href="/" alt="chat">
            [chat]
          </a>{' '}
          {user.name} &lt;{user.email}&gt;
        </li>
      ))}
    </ul>
  ) : (
    <div>No other users!</div>
  );
}

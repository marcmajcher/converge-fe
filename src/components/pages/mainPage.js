import React from 'react';
import UserPage from './userPage';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <UserPage></UserPage>
      <Link to="/new">Start a New Game</Link>
      or
      <Link to="/join">Join a Game</Link>
    </div>
  );
}

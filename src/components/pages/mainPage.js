import React from 'react';
import UserPage from './userPage';
import LoginPage from './loginPage';
import { useSelector } from 'react-redux';

export default function MainPage() {
  const loggedIn = !!useSelector(store => store.userInfo);
  return (
    <div className="content">
      {loggedIn ? (
        <div>
          <UserPage></UserPage>
          <button>Start a New Game</button>
          or
          <button>Join a Game</button>
        </div>
      ) : (
        <LoginPage></LoginPage>
      )}
    </div>
  );
}

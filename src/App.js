import React, { useState } from 'react';
import GoogleLoginButton from './components/googleLoginButton';
import UserInfo from './components/userInfo';
import './App.scss';
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState(undefined);

  function handleLogin(token) {
    axios
      .post('http://localhost:8000/users', { token })
      .then(res => console.log(`Token: ${token}`));
  }

  return (
    <div className="app">
      <header className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="/">
            Converge
          </a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="/" className="pure-menu-link">
                About
              </a>
            </li>
            <li className="pure-menu-item">
              <GoogleLoginButton
                loggedIn={userInfo}
                handleLogin={info => {
                  handleLogin(info.tokenObj.id_token);
                  setUserInfo(info.profileObj);
                }}
                handleLogout={() => {
                  setUserInfo(undefined);
                }}
              ></GoogleLoginButton>
            </li>
          </ul>
        </div>
      </header>

      <div className="content">
        {userInfo ? (
          <UserInfo userInfo={userInfo}></UserInfo>
        ) : (
          <div>Log in by clicking the button in the upper right!</div>
        )}
      </div>
    </div>
  );
}

export default App;

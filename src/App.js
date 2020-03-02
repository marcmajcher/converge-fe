import React, { useState, useEffect } from 'react';
import './App.scss';
import GoogleLoginButton from './components/google-login-button';
import UserInfo from './components/UserInfo';

function App() {
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => userInfo && console.log(userInfo.profileObj));

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
                loggedIn={userInfo !== undefined}
                handleLogin={info => {
                  setUserInfo(info);
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
          <UserInfo userInfo={userInfo.profileObj}></UserInfo>
        ) : (
          <div>Log in by clicking the button in the upper right!</div>
        )}
      </div>
    </div>
  );
}

export default App;

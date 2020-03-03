import React, { useState, useEffect } from 'react';
import GoogleLoginButton from './components/googleLoginButton';
import UserInfo from './components/userInfo';
import './App.scss';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

function App() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem('t');
    if (token) {
      axios
        .post(`${BASE_URL}/users/verify`, { token })
        .then(response => {
          setUserInfo(response.data);
          setLoading(false);
        })
        .catch(() => {
          handleLogout();
        });
    }
  }, []);

  function handleLogin(info) {
    axios
      .post(`${BASE_URL}/users`, {
        token: info.tokenObj.id_token,
        userData: info.profileObj,
      })
      .then(res => {
        setUserInfo(info.profileObj);
        localStorage.setItem('t', res.data.token);
      });
  }

  function handleLogout() {
    setUserInfo(undefined);
    localStorage.setItem('t', '');
    setLoading(false);
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
              {loading ? (
                <div>Loading...</div>
              ) : (
                <GoogleLoginButton
                  loggedIn={!!userInfo}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                ></GoogleLoginButton>
              )}
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

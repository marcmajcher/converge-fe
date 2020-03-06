import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { logInUser, logOutUser } from '../dux';

export default function LoginButton() {
  const dispatch = useDispatch();
  const appId = useSelector(store => store.appId);
  const endpoint = useSelector(store => store.endpoint);
  const loggedIn = useSelector(store => store.loggedIn);
  const tokenKey = useSelector(store => store.tokenKey);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      axios
        .post(`${endpoint}/users/verify`, { token })
        .then(response => dispatch(logInUser(response.data)))
        .catch(handleLogout);
    } else {
      dispatch(logOutUser());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleLogin(info) {
    axios
      .post(`${endpoint}/users`, {
        token: info.tokenObj.id_token,
        userData: info.profileObj,
      })
      .then(res => {
        dispatch(logInUser(info.profileObj));
        localStorage.setItem(tokenKey, res.data.token);
      });
  }

  function handleLogout() {
    dispatch(logOutUser());
    localStorage.setItem(tokenKey, '');
  }

  return (
    <>
      <GoogleLogout
        className={loggedIn ? '' : 'hidden'}
        clientId={appId}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      ></GoogleLogout>
      <GoogleLogin
        clientId={appId}
        className={loggedIn ? 'hidden' : ''}
        buttonText="Log In With Google"
        onSuccess={res => handleLogin(res)}
        onFailure={res => console.error(`Login Error: ${res}`)}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

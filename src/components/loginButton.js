import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { logInUser, logOutUser } from '../dux';

const APP_ID =
  '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com';
const API_URL = 'http://localhost:8000';
const TOKEN_KEY = '_t';

function LoginButton({ dispatch, loggedIn }) {
  console.log('loggedin:', loggedIn);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      axios
        .post(`${API_URL}/users/verify`, { token })
        .then(response => dispatch(logInUser(response.data)))
        .catch(handleLogout);
    } else {
      dispatch(logOutUser());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleLogin(info) {
    axios
      .post(`${API_URL}/users`, {
        token: info.tokenObj.id_token,
        userData: info.profileObj,
      })
      .then(res => {
        dispatch(logInUser(info.profileObj));
        localStorage.setItem(TOKEN_KEY, res.data.token);
      });
  }

  function handleLogout() {
    dispatch(logOutUser());
    localStorage.setItem(TOKEN_KEY, '');
  }

  return <>
    <GoogleLogout className={loggedIn?'':'hidden'}
      clientId={APP_ID}
      buttonText="Logout"
      onLogoutSuccess={() => handleLogout()}
    ></GoogleLogout>
    <GoogleLogin
      clientId={APP_ID} className={loggedIn?'hidden':''}
      buttonText="Log In With Google"
      onSuccess={res => handleLogin(res)}
      onFailure={res => console.error(`Login Error: ${res}`)}
      cookiePolicy={'single_host_origin'}
    />
    </>
}

export default connect(store => ({ loggedIn: store.loggedIn }))(LoginButton);

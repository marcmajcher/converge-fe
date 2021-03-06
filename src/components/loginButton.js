import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { logInUser, logOutUser, setUserInfo } from '../actions';

export default function LoginButton() {
  const dispatch = useDispatch();
  const appId = useSelector((s) => s.appId);
  const endpoint = useSelector((s) => s.endpoint);
  const loggedIn = useSelector((s) => s.loggedIn);
  const token = useSelector((s) => s.token);

  useEffect(() => {
    if (token) {
      axios
        .post(`${endpoint}/users/verify`, { token })
        .then((response) => dispatch(setUserInfo(response.data)))
        .catch(() => dispatch(logOutUser()));
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleLogin(info) {
    axios
      .post(`${endpoint}/users`, {
        token: info.tokenObj.id_token,
        userData: info.profileObj,
      })
      .then((res) => dispatch(logInUser(info.profileObj, res.data.token)))
      .catch((err) => console.error(err));
  }

  return (
    <div className={loggedIn ? 'button-login' : 'splash-button-login'}>
      <GoogleLogout
        className={loggedIn ? '' : 'hidden'}
        clientId={appId}
        buttonText="Logout"
        onLogoutSuccess={() => dispatch(logOutUser())}
      ></GoogleLogout>
      <GoogleLogin
        clientId={appId}
        className={loggedIn ? 'hidden' : ''}
        buttonText="Log In With Google"
        onSuccess={(res) => handleLogin(res)}
        onFailure={(res) => console.error(`Login Error: ${res}`)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

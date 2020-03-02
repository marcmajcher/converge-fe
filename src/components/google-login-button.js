import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useState, useEffect } from 'react';
const APP_ID =
  '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com';

export default function GoogleLoginButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);
  useEffect(() => console.log(userInfo));

  return loggedIn ? (
    <GoogleLogout
      clientId={APP_ID}
      buttonText="Logout"
      onLogoutSuccess={() => setLoggedIn(false)}
    ></GoogleLogout>
  ) : (
    <GoogleLogin
      clientId={APP_ID}
      buttonText="Login"
      onSuccess={res => {
        setLoggedIn(true);
        setUserInfo(res);
      }}
      onFailure={res => console.error(`Login Error: ${res}`)}
      cookiePolicy={'single_host_origin'}
    />
  );
}

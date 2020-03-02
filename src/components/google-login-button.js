import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react';
const APP_ID =
  '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com';

export default function GoogleLoginButton(props) {
  return props.loggedIn ? (
    <GoogleLogout
      clientId={APP_ID}
      buttonText="Logout"
      onLogoutSuccess={() => props.handleLogout()}
    ></GoogleLogout>
  ) : (
    <GoogleLogin
      clientId={APP_ID}
      buttonText="Log In With Google"
      onSuccess={res => {
        props.handleLogin(res);
      }}
      onFailure={res => console.error(`Login Error: ${res}`)}
      cookiePolicy={'single_host_origin'}
    />
  );
}

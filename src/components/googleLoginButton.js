import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react';
import { handleLogin, handleLogout } from './userManager';
import { connect } from 'react-redux';

const APP_ID =
  '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com';

function GoogleLoginButton(props) {
  return props.loggedIn ? (
    <GoogleLogout
      clientId={APP_ID}
      buttonText="Logout"
      onLogoutSuccess={() => handleLogout(props.dispatch)}
    ></GoogleLogout>
  ) : (
    <GoogleLogin
      clientId={APP_ID}
      buttonText="Log In With Google"
      onSuccess={res => handleLogin(props.dispatch, res)}
      onFailure={res => console.error(`Login Error: ${res}`)}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default connect(props => props)(GoogleLoginButton);

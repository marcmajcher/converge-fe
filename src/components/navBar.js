import React from 'react';
import { connect } from 'react-redux';
import GoogleLoginButton from './loginButton';

function NavBar(props) {
  return (
    <header className="pure-menu pure-menu-horizontal">
      <h1>Converge</h1>

      {props.userInfo && (
        <>
          <img
            className="user-image"
            src={props.userInfo.imageUrl}
            alt={props.userInfo.name}
          />
        </>
      )}
      <GoogleLoginButton></GoogleLoginButton>
    </header>
  );
}

export default connect((store) => store)(NavBar);

import React from 'react';
import { connect } from 'react-redux';
import GoogleLoginButton from './loginButton';

function NavBar(props) {
  return (
    <header className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="/">
          Converge
        </a>
        <ul className="pure-menu-list">
          {props.userInfo && (
            <li className="pure-menu-item">
              <img
                className="user-image"
                src={props.userInfo.imageUrl}
                alt={props.userInfo.name}
              />
            </li>
          )}
          <li className="pure-menu-item">
            <GoogleLoginButton></GoogleLoginButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default connect(store => store)(NavBar);

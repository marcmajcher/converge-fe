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
          {/* <li className="pure-menu-item">
            <a href="/" className="pure-menu-link">
              About
            </a>
          </li> */}
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
            <GoogleLoginButton loggedIn={props.userInfo}></GoogleLoginButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default connect(store => store)(NavBar);

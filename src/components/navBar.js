import React from 'react';
import { connect } from 'react-redux';
import GoogleLoginButton from './components/googleLoginButton';

function NavBar() {
  return (
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
            {this.props.loading ? (
              <div>Loading...</div>
            ) : (
              <GoogleLoginButton
                loggedIn={!!this.props.userInfo}
              ></GoogleLoginButton>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default connect(store => store)(NavBar)

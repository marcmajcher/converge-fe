import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './userInfo';
import UserList from './userList';

class PageMain extends Component {
  render() {
    return (
      <div className="content">
        <h1>This is the home page</h1>
        {this.props.userInfo ? (
          <>
            <UserInfo userInfo={this.props.userInfo}></UserInfo>
            <hr />
            <UserList></UserList>
          </>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default connect(store => store)(PageMain);

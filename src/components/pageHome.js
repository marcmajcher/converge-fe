import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './userInfo';
import UserList from './userList';

class PageHome extends Component {
  render() {
    return (
      <div className="content">
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

export default connect(store => store)(PageHome);

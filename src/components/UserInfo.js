import React, { Component } from 'react';

export default class UserInfo extends Component {
  render() {
    const info = this.props.userInfo;
    return (
      <div>
        <h1>Hi, {info.givenName}!</h1>
        <img src={info.imageUrl} alt={info.name} />
      </div>
    );
  }
}

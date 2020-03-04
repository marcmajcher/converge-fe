import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionSetUserInfo, actionSetLoading } from '../reducer';
import axios from 'axios';

const API_URL = 'http://localhost:8000';
const TOKEN_KEY = '_t';

class UserManager extends Component {
  onComponentDidMount() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      axios
        .post(`${API_URL}/users/verify`, { token })
        .then(response => {
          this.props.dispatch(actionSetUserInfo(response.data));
          this.props.dispatch(actionSetLoading(false));
        })
        .catch(() => {
          handleLogout();
        });
    } else {
      this.props.dispatch(actionSetLoading(false));
    }
  }
  render() {
    return <div></div>;
  }
}

export default connect(store => store)(UserManager);

export function handleLogin(dispatch, info) {
  axios
    .post(`${API_URL}/users`, {
      token: info.tokenObj.id_token,
      userData: info.profileObj,
    })
    .then(res => {
      dispatch(actionSetUserInfo(info.profileObj));
      localStorage.setItem(TOKEN_KEY, res.data.token);
    });
}

export function handleLogout(dispatch) {
  dispatch(actionSetLoading(false));
  dispatch(actionSetUserInfo(undefined));
  localStorage.setItem(TOKEN_KEY, '');
}

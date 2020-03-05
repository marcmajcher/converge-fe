import { createStore } from 'redux';
const defaultStore = {
  userInfo: undefined,
  loggedIn: false,
};

export default function reducer(state = defaultStore, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'LOG_IN':
      return { ...state, userInfo: action.payload, loggedIn: true };
    case 'LOG_OUT':
      return { ...state, userInfo: undefined, loggedIn: false };
    default:
      return state;
  }
}

export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', payload: userInfo };
}
export function logInUser(userInfo) {
  return { type: 'LOG_IN', payload: userInfo };
}
export function logOutUser() {
  return { type: 'LOG_OUT', payload: false };
}

export const store = createStore(reducer, defaultStore);

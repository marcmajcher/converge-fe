import { createStore } from 'redux';
// NB: I am committing a sin by setting the token in localStorage in my reducers.

const tokenKey = '_t';
const defaultStore = {
  appId:
    '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com',
  endpoint: 'http://localhost:8000',
  loggedIn: false,
  socket: undefined,
  token: undefined,
  userInfo: undefined,

  _randomNumber: 0,
};

export default function reducer(state = defaultStore, action) {
  switch (action.type) {
    case 'CHECK_TOKEN':
      const localToken = localStorage.getItem(tokenKey);
      return { ...state, token: localToken };
    case 'SET_NUMBER':
      return { ...state, _randomNumber: action.payload };
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload, loggedIn: true };
    case 'SET_SOCKET':
      return { ...state, socket: action.payload };
    case 'LOG_IN':
      const { token, userInfo } = action.payload;
      localStorage.setItem(tokenKey, token);
      return { ...state, userInfo, token, loggedIn: true };
    case 'LOG_OUT':
      localStorage.setItem(tokenKey, '');
      return {
        ...state,
        userInfo: undefined,
        token: undefined,
        loggedIn: false,
      };
    default:
      return state;
  }
}

export function checkToken() {
  return { type: 'CHECK_TOKEN' };
}
export function setNumber(number) {
  return { type: 'SET_NUMBER', payload: number };
}
export function setSocket(socket) {
  return { type: 'SET_SOCKET', payload: socket };
}
export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', payload: userInfo };
}
export function logInUser(userInfo, token) {
  return { type: 'LOG_IN', payload: { token, userInfo } };
}
export function logOutUser() {
  return { type: 'LOG_OUT', payload: false };
}

export const store = createStore(reducer, defaultStore);

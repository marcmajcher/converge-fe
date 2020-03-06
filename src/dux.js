import { createStore } from 'redux';
const defaultStore = {
  appId:
    '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com',
  endpoint: 'http://localhost:8000',
  loggedIn: false,
  socket: undefined,
  tokenKey: '_t',
  userInfo: undefined,
};

export default function reducer(state = defaultStore, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'SET_SOCKET':
      return { ...state, socket: action.payload };
    case 'LOG_IN':
      return { ...state, userInfo: action.payload, loggedIn: true };
    case 'LOG_OUT':
      return { ...state, userInfo: undefined, loggedIn: false };
    default:
      return state;
  }
}

export function setSocket(socket) {
  return { type: 'SET_SOCKET', payload: socket };
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

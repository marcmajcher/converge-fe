import { createStore } from 'redux';
// NB: I am committing a sin by setting the token in localStorage in my reducers.

const tokenKey = '_t';
const defaultStore = {
  appId:
    '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com',
  endpoint: 'http://localhost:8000',
  gameId: undefined,
  loggedIn: false,
  socket: undefined,
  token: undefined,
  userInfo: undefined,
  _randomNumber: 0,
};

function reducer(state = defaultStore, action) {
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
      state.socket.disconnect(true);
      return {
        ...state,
        loggedIn: false,
        token: undefined,
        userInfo: undefined,
      };
    case 'SET_GAME_ID':
      return { ...state, gameId: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer, defaultStore);

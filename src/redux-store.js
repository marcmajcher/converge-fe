import { createStore } from 'redux';
// NB: I am committing a sin by setting the token in localStorage in my reducers.

const tokenKey = '_t';
const defaultStore = {
  appId:
    '730966416306-dv0e9pb4m0k6khl2nrn5r9vskv2j8hmk.apps.googleusercontent.com',
  countdown: undefined,
  endpoint:
    process.env.NODE_ENV === 'production'
      ? 'https://converge-game-be.herokuapp.com'
      : 'http://localhost:8000',
  gameId: undefined,
  gameState: undefined,
  loggedIn: false,
  socket: undefined,
  token: undefined,
  userInfo: undefined,
  words: undefined,
};

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case 'CHECK_TOKEN':
      const localToken = localStorage.getItem(tokenKey);
      return { ...state, token: localToken };
    case 'CLEAR_GAME':
      return {
        ...state,
        gameState: 'main',
        gameId: undefined,
        words: undefined,
        countdown: undefined,
      };

    case 'LOG_IN':
      const { token, userInfo } = action.payload;
      localStorage.setItem(tokenKey, token);
      return { ...state, userInfo, token, loggedIn: true };
    case 'LOG_OUT':
      localStorage.setItem(tokenKey, '');
      state.socket && state.socket.disconnect(true);
      return {
        ...state,
        loggedIn: false,
        token: undefined,
        userInfo: undefined,
      };
    case 'RESET_COUNTDOWN':
      return { ...state, countdown: undefined };
    case 'RESET_GAME':
      return {
        ...state,
        gameState: 'countdown',
        countdown: undefined,
        words: undefined,
      };
    case 'RESET_WORDS':
      return { ...state, words: undefined };
    case 'SET_COUNTDOWN':
      return { ...state, countdown: action.payload };
    case 'SET_GAME_ID':
      return { ...state, gameId: action.payload };
    case 'SET_GAME_STATE':
      return { ...state, gameState: action.payload };
    case 'SET_SOCKET':
      return { ...state, socket: action.payload };
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload, loggedIn: true };
    case 'SET_WORDS':
      return { ...state, words: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer, defaultStore);

import { createStore } from 'redux';
const defaultStore = {
  userInfo: {},
  loading: true,
};

export default function reducer(state = defaultStore, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export function actionSetUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', payload: userInfo };
}
export function actionSetLoading(loading) {
  return { type: 'SET_LOADING', payload: loading };
}

export const store = createStore(reducer, defaultStore);

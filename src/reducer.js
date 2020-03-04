export default function reducer(state = {}, action) {
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

/* ACTIONS:

action: SET_USER_INFO
payload: { ...userInfo }

action: SET_LOADING
payload: true/false

*/

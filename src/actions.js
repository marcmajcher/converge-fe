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
export function resetRedirect() {
  return { type: 'RESET_REDIRECT' };
}

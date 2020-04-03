export function checkToken() {
  return { type: 'CHECK_TOKEN' };
}
export function clearGame() {
  return { type: 'CLEAR_GAME' };
}
export function logInUser(userInfo, token) {
  return { type: 'LOG_IN', payload: { token, userInfo } };
}
export function logOutUser() {
  return { type: 'LOG_OUT', payload: false };
}
export function resetGame() {
  return { type: 'RESET_GAME' };
}
export function resetWords() {
  return { type: 'RESET_WORDS' };
}
export function setCountdown(count) {
  return { type: 'SET_COUNTDOWN', payload: count };
}
export function setGameId(id) {
  return { type: 'SET_GAME_ID', payload: id };
}
export function setGameState(state) {
  return { type: 'SET_GAME_STATE', payload: state };
}
export function setSocket(socket) {
  return { type: 'SET_SOCKET', payload: socket };
}
export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', payload: userInfo };
}
export function setWords(words) {
  return { type: 'SET_WORDS', payload: words };
}

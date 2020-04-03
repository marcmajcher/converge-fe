import { setSocket } from '../actions';
import { useDispatch } from 'react-redux';
import {
  clearGame,
  resetGame,
  setCountdown,
  setGameId,
  setGameState,
  setWords,
} from '../actions';

export default function useSocketSetup() {
  const dispatch = useDispatch();
  return (socket) => {
    socket.on('endGame', () => dispatch(clearGame()));
    socket.on('info', (message) => console.info(`INFO: ${message}`));
    socket.on('newGameCreated', (data) => dispatch(setGameId(data.gameId)));
    socket.on('resetGame', () => dispatch(resetGame()));
    socket.on('roundOver', (words) => dispatch(setWords(words)));
    socket.on('startCountdown', (count) => {
      dispatch(setCountdown(count));
      if (count >= 0) {
        dispatch(setGameState('countdown'));
      }
    });
    socket.on('startGame', () => dispatch(setGameState('game')));
    socket.on('winGame', (words) => {
      dispatch(setGameState('winGame'));
      dispatch(setWords(words));
    });
    dispatch(setSocket(socket));
  };
}

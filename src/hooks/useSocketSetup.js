import { setSocket } from '../actions';
import { useDispatch } from 'react-redux';
import { setCountdown, setGameId, setGameState, setWords } from '../actions';

export default function useSocketSetup() {
  const dispatch = useDispatch();
  return socket => {
    socket.on('info', message => console.info(`INFO: ${message}`));
    socket.on('newGameCreated', data => dispatch(setGameId(data.gameId)));
    socket.on('startCountdown', count => {
      dispatch(setCountdown(count));
      if (count >= 0) {
        dispatch(setGameState('countdown'));
      }
    });
    socket.on('startGame', () => dispatch(setGameState('game')));
    socket.on('roundOver', words => dispatch(setWords(words)));
    socket.on('winGame', null);
    dispatch(setSocket(socket));
  };
}

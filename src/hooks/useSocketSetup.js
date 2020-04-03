import { setSocket } from '../actions';
import { useDispatch } from 'react-redux';
import { setGameId, setCountdown, setWords } from '../actions';

export default function useSocketSetup() {
  const dispatch = useDispatch();
  return socket => {
    socket.on('info', message => console.info(`INFO: ${message}`));
    socket.on('newGameCreated', data => dispatch(setGameId(data.gameId)));
    socket.on('startCountdown', count => dispatch(setCountdown(count)));
    socket.on('startGame', msg => console.log(msg));
    socket.on('roundOver', words => dispatch(setWords(words)));
    socket.on('winGame', null);
    dispatch(setSocket(socket));
  };
}

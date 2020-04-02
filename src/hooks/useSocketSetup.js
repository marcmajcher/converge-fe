import { setSocket } from '../actions';
import { useDispatch } from 'react-redux';
import { setGameId, setCountdown } from '../actions';

export default function useSocketSetup() {
  const dispatch = useDispatch();
  return socket => {
    socket.on('info', message => console.info(`INFO: ${message}`));
    socket.on('newGameCreated', data => dispatch(setGameId(data.gameId)));
    socket.on('startCountdown', count => dispatch(setCountdown(count)));
    socket.on('startGame', msg => console.log(msg));
    dispatch(setSocket(socket));
  };
}

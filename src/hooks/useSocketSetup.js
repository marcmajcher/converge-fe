import { setSocket, setNumber } from '../actions';
import { useDispatch } from 'react-redux';
import { setGameId } from '../actions';

export default function useSocketSetup() {
  const dispatch = useDispatch();
  return socket => {
    socket.on('number', data => dispatch(setNumber(data)));
    socket.on('info', message => console.info(message));
    socket.on('newGameCreated', data => dispatch(setGameId(data.gameId)));
    dispatch(setSocket(socket));
  };
}

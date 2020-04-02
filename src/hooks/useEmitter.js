import { useSelector } from 'react-redux';

const validMessages = ['joinGame', 'startNewGame'];

export default function useEmitter(type) {
  const socket = useSelector(s => s.socket);
  if (socket) {
    if (validMessages.includes(type)) {
      return data => {
        socket.emit(type, data);
      };
    }
    throw new Error(`Invalid socket message type: ${type}`);
  }
}

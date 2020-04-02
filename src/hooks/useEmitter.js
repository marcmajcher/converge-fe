import { useSelector } from 'react-redux';

export default function useEmitter(type) {
  const socket = useSelector(store => store.socket);
  if (socket) {
    return data => {
      socket.emit(type, data);
    };
  }
}

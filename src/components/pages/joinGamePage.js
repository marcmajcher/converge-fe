import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { setGameState } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function JoinGamePage() {
  const countdown = useSelector(s => s.countdown);
  const dispatch = useDispatch();
  const emitJoinGame = useEmitter('joinGame');
  const [gameId, setGameId] = useState('');

  if (countdown) {
    dispatch(setGameState('countdown'));
  }

  return (
    <div>
      <h1>JOIN GAME</h1>
      Game ID:{' '}
      <input value={gameId} onChange={e => setGameId(e.target.value)}></input>
      <button onClick={() => emitJoinGame(gameId)}>Begin!</button>
    </div>
  );
}

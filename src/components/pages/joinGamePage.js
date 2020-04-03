import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useState } from 'react';

export default function JoinGamePage() {
  const emitJoinGame = useEmitter('joinGame');
  const [gameId, setGameId] = useState('');

  return (
    <div>
      <h1>JOIN GAME</h1>
      Game ID:{' '}
      <input value={gameId} onChange={e => setGameId(e.target.value)}></input>
      <button onClick={() => emitJoinGame(gameId)}>Begin!</button>
    </div>
  ) 
}

import React from 'react';
import { useState } from 'react';
import useEmitter from '../../hooks/useEmitter';

export default function JoinGamePage() {
  const [gameId, setGameId] = useState('');
  const emitJoinGame = useEmitter('joinGame');
  function onBeginGame() {
    console.log("emitting ",gameId)
    emitJoinGame(gameId);
  }
  function onGameIdChange(e) {
    setGameId(e.target.value);
  }
  return (
    <div>
      <h1>JOIN GAME</h1>
      Game ID: <input value={gameId} onChange={onGameIdChange}></input>
      <button onClick={onBeginGame}>Begin!</button>
    </div>
  );
}

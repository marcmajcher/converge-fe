import React from 'react';
import { useState } from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function JoinGamePage() {
  const [gameId, setGameId] = useState('');
  const emitJoinGame = useEmitter('joinGame');
  const countdown = useSelector(s => s.countdown);

  function onBeginGame() {
    emitJoinGame(gameId);
  }
  function onGameIdChange(e) {
    setGameId(e.target.value);
  }

  return countdown ? (
    <Redirect to="/cd"></Redirect>
  ) : (
    <div>
      <h1>JOIN GAME</h1>
      Game ID: <input value={gameId} onChange={onGameIdChange}></input>
      <button onClick={onBeginGame}>Begin!</button>
    </div>
  );
}

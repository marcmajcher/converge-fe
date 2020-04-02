import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function StartGamePage() {
  const emitStartGame = useEmitter('startNewGame');
  const gameId = useSelector(s => s.gameId);
  const countdown = useSelector(s => s.countdown);

  useEffect(() => emitStartGame(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return countdown ? (
    <Redirect to="/cd"></Redirect>
  ) : gameId ? (
    <div>
      Your game id is:<h1>{gameId}</h1>
    </div>
  ) : (
    <h1>Starting...</h1>
  );
}

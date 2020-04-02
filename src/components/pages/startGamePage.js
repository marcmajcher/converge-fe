import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function StartGamePage() {
  const emitStartGame = useEmitter('startNewGame');
  const gameId = useSelector(store => store.gameId);

  useEffect(() => emitStartGame(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return gameId ? (
    <div>
      Your game id is:<h1>{gameId}</h1>
    </div>
  ) : (
    <h1>Starting...</h1>
  );
}

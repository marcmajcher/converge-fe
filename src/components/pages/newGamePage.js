import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function NewGamePage() {
  const emitStartGame = useEmitter('startNewGame');
  const gameId = useSelector(s => s.gameId);

  useEffect(() => emitStartGame(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return gameId ? (
    <div>
      Your game id is:<h1>{gameId}</h1>
    </div>
  ) : (
    <h1>Starting...</h1>
  );
}

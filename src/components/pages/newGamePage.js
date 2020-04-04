import React from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function NewGamePage() {
  const emitStartGame = useEmitter('startNewGame');
  const gameId = useSelector((s) => s.gameId);

  useEffect(() => emitStartGame(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {gameId ? (
        <>
          {' '}
          <h1>Your Game ID:</h1>
          <div className="game-id">{gameId}</div>
          <p>Give this to a friend to join your game!</p>
        </>
      ) : (
        <h1>Starting game...</h1>
      )}
    </div>
  );
}

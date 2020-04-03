import React from 'react';
import { setGameState } from '../../actions';
import { useEffect } from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector, useDispatch } from 'react-redux';

export default function NewGamePage() {
  const countdown = useSelector(s => s.countdown);
  const dispatch = useDispatch();
  const emitStartGame = useEmitter('startNewGame');
  const gameId = useSelector(s => s.gameId);

  useEffect(() => emitStartGame(), []); // eslint-disable-line react-hooks/exhaustive-deps

  if (countdown) {
    dispatch(setGameState('countdown'));
  }

  return gameId ? (
    <div>
      Your game id is:<h1>{gameId}</h1>
    </div>
  ) : (
    <h1>Starting...</h1>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameState } from '../../actions';

export default function MainPage() {
  const dispatch = useDispatch();
  const info = useSelector((s) => s.userInfo);

  return (
    <div>
      <h1>Hi, {info.givenName}!</h1>
      <h2>Would you like to:</h2>
      <button
        className="pure-button button-main"
        onClick={() => dispatch(setGameState('newGame'))}
      >
        Start a New Game
      </button>

      <h2>or</h2>

      <button
        className="pure-button button-main"
        onClick={() => dispatch(setGameState('joinGame'))}
      >
        Join a Game
      </button>
    </div>
  );
}

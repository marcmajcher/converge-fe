import React from 'react';
import UserPage from './userPage';
import { useDispatch } from 'react-redux';
import { setGameState } from '../../actions';

export default function MainPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <UserPage></UserPage>
      <button onClick={() => dispatch(setGameState('newGame'))}>
        Start a New Game
      </button>
      <button onClick={() => dispatch(setGameState('joinGame'))}>
        Join a Game
      </button>
    </div>
  );
}
